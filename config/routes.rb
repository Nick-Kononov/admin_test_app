Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :users, only: [:current, :login, :edit_skills] do
        collection do
          post 'login'
          get 'current'
          post 'edit_skills'
        end
      end
      resources :categories, only: :index
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
