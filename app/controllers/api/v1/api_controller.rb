module Api::V1
  class ApiController < ActionController::API
    include ActionController::MimeResponds
    include ExceptionHandler

    before_action :authenticate_request
    attr_reader :current_user


    private
    def authenticate_request
      @current_user = AuthorizeApiRequest.call(request.headers).result
      render json: { error: 'Not Authorized' }, status: 401 unless @current_user
    end
  end
end
