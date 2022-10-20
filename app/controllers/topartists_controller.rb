class TopartistsController < ApplicationController

    def index
        puts "****this is the access_token", User.first.access_token
        decodedAccess = decode(User.first.access_token)
        puts "this is the decoded access token", decodedAccess
        token = decodedAccess[0]["token"]
        puts "++++++ this is the token", token

        url = "https://api.spotify.com/v1/me/top/artists?limit=12"

        header = {
            "Authorization": "Bearer #{token}"
        }

        puts "this is the header", header

        topartists_response = RestClient.get(url, header)

        puts "this is topartists_response", topartists_response

        # JSON.parse(topartists_response.body)

        render json: topartists_response

    end

end


# header = {
#     "Accept": "application/json",
#     "Content-Type": 'application/json',
#     "Authorization": "Bearer #{access_token}"
# }

# header = {
#     "Accept": "application/json",
#     "Content-Type": 'application/json',
#     "Authorization": "Bearer #{access_token}"
# }