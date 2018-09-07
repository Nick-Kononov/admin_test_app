class WelcomeController < ApplicationController
  def index
    @user = current_user || 'Hello world'
  end
end
