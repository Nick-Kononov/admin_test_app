class Info::UserSkillSerializer < ActiveModel::Serializer
  attributes :id,
             :skill,
             :level,
             :desire

  belongs_to :skill, serializer: Info::SkillSerializer
end
