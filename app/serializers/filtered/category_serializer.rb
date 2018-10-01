class Filtered::CategorySerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :skills

  has_many :skills, serializer: Filtered::SkillSerializer
end
