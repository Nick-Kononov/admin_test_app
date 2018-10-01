ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do

    columns do
      column do
        panel "Recently added users" do
          table_for User.where('created_at >= ?', 1.day.ago).order(id: :desc) do
            column 'Name' do |user|
              link_to(user.username, admin_user_path(user))
            end
            column :email
            column :role
            column :created_at
          end
        end
      end

      column do
        panel "Info" do
          para "Welcome to Admin Page."
        end
      end
    end # columns

  end # content
end
