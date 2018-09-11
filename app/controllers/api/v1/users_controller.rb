module Api::V1
  class UsersController < ApiController
    def index
      @users = User.all
      respond_to do |format|
        format.json { render json: @users }
      end
    end
  end
end
