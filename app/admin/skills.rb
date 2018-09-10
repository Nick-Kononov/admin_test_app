ActiveAdmin.register Skill do
  menu priority: 5
  permit_params :name, :description, :section_id

  index do
    selectable_column
    id_column
    column :name
    column :section
    actions
  end

  filter :name
  filter :user
  filter :section

  form do |f|
    f.inputs do
      f.input :name
      f.input :description
      f.input :section
    end
    f.actions
  end

end
