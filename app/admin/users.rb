ActiveAdmin.register User do
  menu priority: 2
  permit_params :email, :password, :password_confirmation, :username, :role_id,
            user_skills_attributes:[:_destroy, :id, :skill_id, :level, :desire]

  controller do
    def update
      model = :user
      if params[model][:password].blank?
        %w(password password_confirmation).each { |p| params[model].delete(p) }
      end

      super
    end
  end


  index do
    selectable_column
    id_column
    column :email
    column :username
    column :role
    column :created_at
    actions
  end

  show do
    columns do
      column do
        panel "Profile Info" do
          attributes_table_for user do
            row :email
            row :username
            row :role
            row :created_at
            row 'Skills' do |u|
              u.skills.count
            end
          end
        end
      end

      column do
        panel "Skills" do
          table_for user.user_skills do
            column :skill
            column 'Category' do |us|
              us.skill.category
            end
            column :level
            column :desire
          end
        end
      end
    end
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

    f.has_many :user_skills, allow_destroy: true, heading:'Skills' do |t|
      t.input :skill
      t.input :level, as: :select, collection: (1..10)
      t.input :desire, as: :select, collection: (-5..5)
    end

    f.actions
  end



end
