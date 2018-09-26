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

    def edit_skills
      @skill = Skill.find(params[:id])
      p params

      if params[:delete]
        @current_user.skills.delete(@skill)
      else
        current_user.skills << @skill unless @current_user.skills.exists?(@skill.id)
        user_skill = UserSkill.find_by(user_id: @current_user, skill_id: @skill)
        user_skill.update!(level: params[:level], desire: params[:desire])
      end
      p 'Successfuly updated'

      current
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
