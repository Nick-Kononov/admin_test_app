class CreateRoles < ActiveRecord::Migration[5.2]
  def change
    create_table :roles do |t|
      t.string :title, null: false, unique: true
      t.string :description

      t.timestamps
    end
  end
end
