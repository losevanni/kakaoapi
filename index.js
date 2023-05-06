const requests=require('request')
require('dotenv')
url = "https://kauth.kakao.com/oauth/token"
data = {
    "grant_type" : "authorization_code",
    "client_id" : "5e198da93dd9c6f0ccfc9af2cce0a0c0",
    "redirect_url" : "https://localhost:3000",
    "code" : "QkpXbn0Wu7qZHwnbHNAVchkI65fv5XXIg0UxsbC1Q97JqIsiEmD5NnrIljGvn_FWSAaBTwopyNoAAAGH5FEpvA"
}
response = requests.post(url, data=data)
tokens = response.json()
console.log(tokens);
