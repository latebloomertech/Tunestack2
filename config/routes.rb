Rails.application.routes.draw do

  resources :sessions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'api/auth', to: "sessions#create"
  post 'api/login', to: "users#create"
  get 'api/topartists', to: "topartists#index"
  get 'api/playlists', to: "playlists#index"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end