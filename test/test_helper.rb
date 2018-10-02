ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  include FactoryBot::Syntax::Methods

  def authorize symbolic_user
    @user = create(symbolic_user)
    post login_api_v1_users_path, params: {
      email: @user.email,
      password: @user.password
    }
    JSON.parse @response.body
  end
end
