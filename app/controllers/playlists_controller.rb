class PlaylistsController < ApplicationController

    def index
                puts "****playlists access_token", User.first.access_token
                decodedAccess = decode(User.first.access_token)
                puts "playlists decoded access token", decodedAccess
                token = decodedAccess[0]["token"]
                puts "++++++ playlists token", token

                url = "https://api.spotify.com/v1/me/playlists"

                header = {
                    "Authorization": "Bearer #{token}"
                }

                puts "playlists header", header

                playlists_response = RestClient.get(url, header)

                puts "playlists_response", playlists_response

                # JSON.parse(topartists_response.body)

                render json: playlists_response

            end



end
