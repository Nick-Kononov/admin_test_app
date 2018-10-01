require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(email: 'some@email.com', password: 'passwd')
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
    @user.password = '12345'
    refute @user.valid?
    assert_not_nil @user.errors[:password]
  end

end
