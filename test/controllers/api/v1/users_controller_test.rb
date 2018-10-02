require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "valid authorization request" do
    response = authorize(:user)
    assert_equal response['message'], 'Login Successful'
  end

  test "valid current user request" do
    token = authorize(:user)['access_token']
    get current_api_v1_users_path, headers: {
      'Authorization' => "Bearer #{token}"
    }
    assert_equal (JSON.parse @response.body)['id'], @user.id
  end

  test "valid delete skill request" do
    token = authorize(:user_with_skills)['access_token']
    old_skill_id = @user.skills.first.id
    post edit_skills_api_v1_users_path,
      headers: {'Authorization' => "Bearer #{token}"},
      params: {id: old_skill_id, delete: true}
    refute @user.skills.exists?(old_skill_id)
  end

  test "valid edit skill request" do
    token = authorize(:user_with_skills)['access_token']
    old_skill_id = @user.skills.first.id
    post edit_skills_api_v1_users_path,
      headers: {'Authorization' => "Bearer #{token}"},
      params: {id: old_skill_id, delete: false, level: 10, desire: -5}
    assert_equal 10, @user.user_skills.where(skill_id: old_skill_id)[0].level
    assert_equal -5, @user.user_skills.where(skill_id: old_skill_id)[0].desire
  end

end
