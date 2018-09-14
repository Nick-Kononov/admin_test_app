class Info::UserSerializer < ActiveModel::Serializer
  attributes :id,
             :username,
             :email,
             :user_skills

  has_many :user_skills, serializer: Info::UserSkillSerializer
end
