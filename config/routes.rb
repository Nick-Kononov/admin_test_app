Rails.application.routes.draw do
  
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # constraints subdomain: 'api' do
    namespace :api do
      namespace :v1, defaults: {format: :json} do
        resources :users
        get 'current_user', to: 'users#show'
      end
    end
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
