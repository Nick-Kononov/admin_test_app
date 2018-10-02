require 'test_helper'

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  test "unauthorized request" do
    get api_v1_categories_path
    assert_response :error
  end

  test "authorized request" do
    token = authorize(:user)['access_token']
    get api_v1_categories_path, headers: {'Authorization' => "Bearer #{token}"}
    assert_response :success
  end
end
