module Api::V1
  class UserController
    def index
      @user = current_user

      respond_to do |format|
        format.json {renrder json: @user}
      end
    end
    
  end
end
