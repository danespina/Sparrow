Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: "json"} do
    resources :users, only: [:create]
    resources :assets
    resource :session, only: [:create, :destroy]
    resources :portfolios, only: [:create, :update, :show]
    resources :trades, only: [:create]
    resources :watchlists, only: [:create, :destroy]
  end
  resources :assets, only: [:search] do
    get "search", on: :collection
  end
  root "static_pages#root"
end
