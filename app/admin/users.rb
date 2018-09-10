ActiveAdmin.register User do
  menu priority: 2
  permit_params :email, :password, :password_confirmation, :username, :role_id

  index do
    selectable_column
    id_column
    column :email
    column :username
    column :role
    column :created_at
    actions
  end

  filter :email
  filter :username
  filter :created_at

  form do |f|
    f.inputs do
      f.input :email
      f.input :username
      f.input :password
      f.input :password_confirmation
      f.input :role
    end
    f.actions
  end

end
