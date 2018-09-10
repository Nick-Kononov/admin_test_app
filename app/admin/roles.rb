ActiveAdmin.register Role do
  menu priority: 3
  permit_params :title, :description

  form do |f|
    f.inputs do
      f.input :title
      f.input :description, as: :text
    end
    f.actions
  end

  filter :title

  index do
    selectable_column
    id_column
    column :title
    column :description
    actions
  end
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
