require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "valid user" do
    user = User.new(email: 'some@email.com', password: 'password')
    assert user.valid?
  end

  test "invalid user with blank email" do
    user = User.new( password: 'password')
    refute user.valid?
    assert_not_nil user.errors[:email]
  end

  test "invalid user with blank password" do
    user = User.new(email: 'some@email.com')
    refute user.valid?
    assert_not_nil user.errors[:password]
  end
end
