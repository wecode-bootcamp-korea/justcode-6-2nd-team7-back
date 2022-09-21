const secret_key = require("../config/secret_sms");
// const { signature } = require("../utils/makeSignature");

const axios = require("axios");
const Cache = require("memory-cache");
const CryptoJS = require("crypto-js");

const serviceId = secret_key.NCP_serviceID;
const secretKey = secret_key.NCP_secretKey;
const accessKey = secret_key.NCP_accessKey;
const space = " ";
const newLine = "\n";
const method = "POST";
const url2 = `/sms/v2/services/${serviceId}/messages`;
const timestamp = Date.now().toString();

const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(method);
hmac.update(space);
hmac.update(url2);
hmac.update(newLine);
hmac.update(timestamp);
hmac.update(newLine);
hmac.update(accessKey);

const hash = hmac.finalize();
const signature = hash.toString(CryptoJS.enc.Base64);

// 핸드폰번호 인증
exports.send = async function (req, res) {
  const phoneNumber = req.body.phoneNumber;

  // 입력된 핸드폰번호와 동일한 데이터가 입력되있다면 기존 데이터 삭제
  Cache.del(phoneNumber);

  //인증번호 생성
  const verifyCode = Math.floor(Math.random() * (999999 - 100000)) + 100000;

  //핸드폰번호, 인증번호 캐시에 저장
  Cache.put(phoneNumber, verifyCode.toString());

  //http 비동기 통신 라이브러리 (fetch api랑 비슷)
  axios({
    url: `https://sens.apigw.ntruss.com/sms/v2/services/${serviceId}/messages`,
    method: "POST",
    json: true,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-ncp-iam-access-key": accessKey,
      "x-ncp-apigw-timestamp": timestamp,
      "x-ncp-apigw-signature-v2": signature,
    },
    data: {
      type: "SMS",
      contentType: "COMM",
      countryCode: "82",
      from: "01099169937",
      content: `[저기어때] 인증번호 [${verifyCode}]를 입력해주세요.`,
      messages: [
        {
          to: `${phoneNumber}`,
        },
      ],
    },
  })
    .then(function (res) {
      console.log(res.requestId); // 요청 아이디
      console.log(res.requestTime); // 요청시간
      console.log(res.statusCode); // 요청 상태 코드 (202=성공)
      console.log(res.statusName); // 요청 상태명 (success=성공, fail=실패)
      res.status(202).json({ message: "SMS_SEND_SUCCESS" });
    })
    .catch((err) => {
      if (err.res == undefined) {
        res.status(202).json({ message: "SMS_SEND_SUCCESS" });
      } else res.status(404).json({ message: "SMS_SEND_FAILURE" });
    });
};

exports.verify = async function (req, res) {
  const { phoneNumber, verifyCode } = req.body;

  const CacheData = Cache.get(phoneNumber);

  if (!CacheData) {
    return res.status(400).json({ message: "FAILURE_SMS_AUTHENTICATION" });
  } else if (CacheData !== verifyCode) {
    return res.status(400).json({ message: "FAILURE_SMS_AUTHENTICATION" });
  } else {
    Cache.del(phoneNumber);
    return res.status(200).json({ message: "SMS_VERIFY_SUCCESS" });
  }
};
