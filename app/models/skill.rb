class Skill < ApplicationRecord
  has_many :user_skills, class_name: 'UserSkill'
  has_many :users, through: :user_skills
  belongs_to :category, optional: true
end
