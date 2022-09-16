class ApplicationController < ActionController::API
    include ActionController::Cookies

#     def issue_token(payload)
#         JWT.encode(payload, ENV["SOME_SECRET"], ENV["SOME_SUPER_SECRET"])
#     end

#     def decode(jwt_token)
#         my_algorithm = { algorithm: ENV["SOME_SUPER_SECRET"]}
#         JWT.decode(jwt_token, ENV["SOME_SECRET"], true, my_algorithm)[0]
#     end
# end

def issue_token(payload)
    JWT.encode(payload, nil, 'none')
end

def decode(jwt_token)
    JWT.decode(jwt_token, nil, false)
end
end