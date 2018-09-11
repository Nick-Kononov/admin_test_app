class WelcomeController < ApplicationController
  def index
    @user = current_user || { username: 'unauthorized'}
    
    render json: @user
  end
end
