class Info::SkillSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :category

  belongs_to :category, serializer: Info::CategorySerializer
end
