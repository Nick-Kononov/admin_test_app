Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome', to: 'welcome#index'

  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  constraints subdomain: 'api' do
    scope module: :api do
      namespace :v1, defaults: {format: :json} do
        resources :users
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
