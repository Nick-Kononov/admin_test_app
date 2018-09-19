module Api::V1
  class UsersController < ApiController
    skip_before_action :authenticate_request, only: %i[login]

    def login
      authenticate params[:email], params[:password]
    end

    def current
      respond_to do |format|
        format.json {
          render json: @current_user, serializer: Info::UserSerializer, include: '**'
          p 'current user returned'
        }
      end
    end

    private

    def user_params
      params.permit(
        :email,
        :password
      )
    end

    def authenticate(email, password)
      command = AuthenticateUser.call(email, password)

      if command.success?
        render json: {
          access_token: command.result,
          message: 'Login Successful'
        }.to_json
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end

  end
end
