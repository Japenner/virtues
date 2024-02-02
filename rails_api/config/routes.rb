Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users
      resources :reflections
      resources :journal_entries
      resources :virtues
    end
  end
end
