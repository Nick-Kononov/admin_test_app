class CategorySkills::CategorySerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :skills

  has_many :skills, serializer: CategorySkills::SkillSerializer
end
