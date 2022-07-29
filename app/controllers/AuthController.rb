class AuthController < ApplicationController


def spotify_request
    url = "https://accounts.spotify.com/authorize"
    query_params = {
        client_id: Rails.application.credentials[Rails.env.to_sym][:spotify][:client_id],
        scope: ""
    }
end