class Info::SkillSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :description,
             :category

  belongs_to :category, serializer: Info::CategorySerializer
end
