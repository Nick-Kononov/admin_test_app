class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :skills

  has_many :skills
  class SkillSerializer < ActiveModel::Serializer
    attributes :id, :name, :description
  end
end
