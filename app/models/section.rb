class Section < ApplicationRecord
  has_many :skills, dependent: :destroy
end
