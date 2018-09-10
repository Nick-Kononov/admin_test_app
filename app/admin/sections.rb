ActiveAdmin.register Section do
  menu priority: 5
  permit_params :name

  index do
    selectable_column
    id_column
    column :name
    column 'Skills', sortable: :skills_count do |section|
      section.skills.count
    end
    actions
  end

  filter :name

  form do |f|
    f.inputs do
      f.input :name
    end
    f.actions
  end

end
