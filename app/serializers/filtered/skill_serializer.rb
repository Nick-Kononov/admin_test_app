class Filtered::SkillSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :description,
             :active

  attribute :level, if: :active
  attribute :desire, if: :active


  def id
    object.id
  end

  def user_skill
    view_context.current_user.user_skills.where(skill_id: id).first
  end

  def active
    view_context.current_user.skills.exists?(id)
  end

  def level
    user_skill.level
  end

  def desire
    user_skill.desire
  end

end
