var request = require("request");
require("dotenv").config(); 
const accessToken = process.env.accessToken;

var headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: "Bearer " + accessToken,
};

var dataString = 'template_object={ "object_type": "text","text": "텍스트 영역입니다. 최대 200자 표시 가능합니다.", "link": {"web_url": "https://developers.kakao.com","mobile_web_url": "https://developers.kakao.com"},"button_title": "바로 확인"}';
//https://kapi.kakao.com/v2/api/talk/memo/default/send
var options = {
  url: "https://kapi.kakao.com/v2/api/talk/memo/default/send",
  method: "POST",
  headers: headers,
  body: dataString,
};
// console.log(options);
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    console.log("메시지 전송 완료.");
  } else {
    console.log(error);
  }
}
request(options, callback);
