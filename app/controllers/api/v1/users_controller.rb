module Api::V1
  class UsersController < ApiController
    def index
      @users = User.all
      respond_to do |format|
        format.json { render json: @users }
      end
    end

    def show
      @user = current_user

      respond_to do |format|

        format.json {render json: @user;p 'current user returned'}
      end
    end
  end
end
