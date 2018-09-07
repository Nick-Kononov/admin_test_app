ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation, :username, :role

  index do
    selectable_column
    id_column
    column :email
    column :username
    column :admin
    column :created_at
    actions
  end

  filter :email
  filter :username
  filter :created_at
  filter :admin

  form do |f|
    f.inputs do
      f.input :email
      f.input :username
      f.input :password
      f.input :password_confirmation
      f.input :admin
    end
    f.actions
  end

end
