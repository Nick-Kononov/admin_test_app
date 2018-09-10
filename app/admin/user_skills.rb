ActiveAdmin.register UserSkill do
  menu priority: 3
  permit_params :user_id, :skill_id, :level, :desire

  index do
    selectable_column
    id_column
    column :user
    column :skill
    column :level
    column :desire
    actions
  end

  filter :user
  filter :skill
  filter :level
  filter :desire

  form do |f|
    f.inputs do
      f.input :user
      f.input :skill
      f.input :level
      f.input :desire
    end
    f.actions
  end

end
