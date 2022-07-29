Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

  # namespace :api do
  #   namespace :v1 do
  #     get 'login', to: "auth#spotify_request"
  #     get 'auth', to: "auth#show"
  #     get 'user', to: "users#create"
  #   end
  # end
end
