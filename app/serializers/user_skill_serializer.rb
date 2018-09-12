class UserSkillSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :skill
  class SkillSerializer < ActiveModel::Serializer
    attributes :name, :category
  end
end
