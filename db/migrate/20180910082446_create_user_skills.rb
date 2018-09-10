class CreateUserSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :user_skills do |t|
      t.belongs_to :user, index: true
      t.belongs_to :skill, index: true
      t.integer :level
      t.integer :desire
      t.timestamps
    end
  end
end
