class SpotifyApiAdapter

    def self.urls
        {
            "auth" => "https://accounts.spotify.com/api/token",
            "me" => "https://api.spotify.com/v1/me",
        }
    end

    def self.body_params
        body = {
            client_id: Rails.application.credentials.spotify[:client_id],
            client_secret: Rails.application.credentials.spotify[:client_secret]
        }
    end

    def self.login(code)
        body = body_params.dup
        body[:grant_type] = "authorization_code"
        body[:code] = code
        body[:redirect_uri] = 'http://localhost:4000/callback'

        auth_response = RestClient.post(urls["auth"], body)
        JSON.parse(auth_response.body)
    end

    def self.getUserData(access_token)
        header = {
            "Authorization": "Bearer #{access_token}"
        }

        user_response = RestClient.get(urls["me"], header)

        JSON.parse(user_response.body)
    end


end

