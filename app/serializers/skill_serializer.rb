class SkillSerializer < ActiveModel::Serializer
  attributes :name, :category

  has_one :category
  has_many :user_skills
  class CategorySerializer < ActiveModel::Serializer
    attributes :name
  end
end
