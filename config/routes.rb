Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/hello', to: 'application#hello_world'
  get '/api/v1/login', to: "auth#spotify_request"
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

  # namespace :api do
  #   namespace :v1 do
      # get 'auth', to: "auth#show"
      # get 'user', to: "users#create"
    # end
end
