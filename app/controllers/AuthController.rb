class AuthController < ApplicationController


def spotify_request
    url = "https://accounts.spotify.com/authorize"
    query_params = {
        client_id: Rails.application.credentials.spotify[:client_id],
        response_type: 'code',
        # redirect_uri:'http://localhost:4000/',
        redirect_uri:'https://tunestack2.herokuapp.com/',
        scope: 'user-read-private
        user-read-email
        user-library-modify
        playlist-modify-public
        playlist-modify-private
        user-top-read
        user-library-read',
        show_dialog: true
    }
    redirect_to "#{url}?#{query_params.to_query}"
    end
end
