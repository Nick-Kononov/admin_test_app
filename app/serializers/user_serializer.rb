class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :user_skills

  has_many :user_skills
  class UserSkillSerializer < ActiveModel::Serializer
    attributes :id, :skill, :level, :desire
  end
end
