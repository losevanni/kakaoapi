// 카톡 ai koGpt 를 사용하는 예제
const axios = require('axios');
require('dotenv').config();
const kakaoai_url="https://api.kakaobrain.com/v1/inference/kogpt/generation";
const REST_API_KEY=process.env.restkey;

const kogpt_api = async (prompt, max_tokens = 1, temperature = 1.0, top_p = 1.0, n = 1)=>{
        const res= await axios.post(
        kakaoai_url,
        {
            prompt,
            max_tokens,
            temperature,
            top_p,
            n
        },
        {
            headers: {
                'Authorization': 'KakaoAK ' + REST_API_KEY,
                'Content-Type': 'application/json'
            }
        })
        console.log(prompt);
    return res.data;
}

var prompt="안녕 너가 할수있는것을 알려줘" ;
const data= kogpt_api(prompt,32,1.0,1.0,1);

data.then(data=>{
    console.log(data.generations[0].text)
});


