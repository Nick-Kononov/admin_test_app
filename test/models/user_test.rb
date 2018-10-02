require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = build(:user)
  end

  test "valid user" do
    assert @user.valid?
  end

  test "invalid user with blank email" do
    @user.email = nil
    refute @user.valid?
    assert_not_nil @user.errors[:email]
  end

  test "invalid user with blank password" do
    @user.password = nil
    refute @user.valid?
    assert_not_nil @user.errors[:password]
  end

  test "invalid user with password shorter then 6 chars" do
    user = build(:user_with_short_password)
    refute user.valid?
    assert_not_nil user.errors[:password]
  end

  test '#skills' do
    user = create(:user_with_skills, skills_count: 2)
    assert_equal 2, user.skills.size
  end

end
