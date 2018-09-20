class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable

  belongs_to :role, optional: true
  has_many :user_skills, class_name: 'UserSkill'
  has_many :skills, through: :user_skills

  accepts_nested_attributes_for :user_skills, :allow_destroy => true

  def admin?
    role.title == 'admin'
  end

  def all_refactored_skills
    refactored_skills = []

    Category.all.each do |category|
      cat = {id: category.id, name: category.name, skills: []}
      category.skills.each do |skill|
        user_skills.each do |my_skill|
          if my_skill.skill_id == skill.id
            cat[:skills] << {
              id: skill.id,
              name: skill.name,
              description: skill.description,
              level: my_skill.level,
              desire: my_skill.desire,
              active: true
            }
          end
        end
        if cat[:skills].none?{|object| (object[:id] == skill.id)}
          cat[:skills] << {id: skill.id,
            name: skill.name,
            description: skill.description,
            active: false
          }
        end
      end
      refactored_skills << cat
    end
    refactored_skills
  end

end
