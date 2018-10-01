require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "valid user" do
    user = User.new(email: 'some@email.com', password: 'password')
    assert user.valid?
  end
end
