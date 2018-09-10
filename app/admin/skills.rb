ActiveAdmin.register Skill do
  menu priority: 4
  permit_params :name, :description, :category_id

  index do
    selectable_column
    id_column
    column :name
    column :category
    actions
  end

  filter :name
  filter :user
  filter :category

  form do |f|
    f.inputs do
      f.input :name
      f.input :description
      f.input :category
    end
    f.actions
  end

end
