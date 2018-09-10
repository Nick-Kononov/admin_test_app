class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable

  belongs_to :role, optional: true

  has_many :user_skills, class_name: 'UserSkill'
  has_many :skills, through: :user_skills

  def admin?
    role.title == 'admin'
  end

end
