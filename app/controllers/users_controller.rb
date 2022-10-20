class UsersController < ApplicationController

def create

        auth_params = SpotifyApiAdapter.login(params[:code])
        user_data = SpotifyApiAdapter.getUserData(auth_params["access_token"])

        puts "THE USER DATA", user_data

        user = User.find_or_create_by(user_params(user_data))
        img_url = user_data["images"][0] ? user_data["images"][0]["url"] : nil

        encodedAccess = issue_token({token: auth_params["access_token"]})
        encodedRefresh = issue_token({token: auth_params["refresh_token"]})

        puts encodedAccess

        user.update(profile_img_url: img_url,access_token: encodedAccess,refresh_token: encodedRefresh)

        render json: user.to_json(:except => [:access_token, :refresh_token, :created_at, :updated_at])
    end

    private

    def user_params(user_data)
        params = {
            email: user_data["email"],
            display_name: user_data["display_name"],
            spotify_url: user_data["external_urls"]["spotify"],
        }
    end
end











  # require 'rest-client'
  # skip_before_action :authorized
  # require "faraday"

  # def create

  # Send request to Spotify for access and refresh tokens

    # body = {
    #   grant_type: "authorization_code",
    #   code: params[:code],
    #   redirect_uri: 'http://localhost:4000/',
    #   # redirect_uri:'https://tunestack2.herokuapp.com/',
    #   client_id: Rails.application.credentials.spotify[:client_id],
    #   client_secret: Rails.application.credentials.spotify[:client_secret],
    # }



    # auth_response = RestClient.post 'https://accounts.spotify.com/api/token', {"grant_type": "authorization_code", "code": params[:code], "redirect_uri": 'http://localhost:3000/api/user/auth', "client_id": Rails.application.credentials.spotify[:client_id], "client_secret": Rails.application.credentials.spotify[:client_secret]}

    # puts auth_response
    # auth_params=JSON.parse(auth_response.body)


    # header = {
    #   Authorization: "Bearer #{auth_params["access_token"]}"
    # }

    # user_response = RestClient.get("https://api.spotify.com/v1/me", header)

    # user_params = JSON.parse(user_response.body)

    # @user = User.find_or_create_by(username: user_params["id"],
    #           spotify_url: user_params["external_urls"]["spotify"],
    #           href: user_params["href"],
    #           uri: user_params["uri"])

    # img_url = user_params["images"[0]] ? user_params["images"][0]["url"] : nil
    # @user.update(profile_img_url: img_url)
    # @user.update(access_token:auth_params["access_token"], refresh_token: auth_params["refresh_token"])

    # payload = {user_id: @user.id}
    # token = issue_token(payload)
    # render json: {jwt: token, user: {
    #                             username: @user.username,
    #                             spotify_url: @user.spotify_url,
    #                             profile_img_url: @user.profile_img_url
    #                             }
    #                           }
    # # If user was just created and has no tracks saved, save them from Spotify
    # # (creates a new thread to allow other requests to be made)
    # if @user.tracks.empty?
    #   @user.save_library
    # end
#   end

# end

