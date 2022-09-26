const axios = require("axios");
const Cache = require("memory-cache");
const CryptoJS = require("crypto-js");
// const { response } = require("express");
// const { Module } = require("module");
const serviceId = process.env.NCP_serviceID;
const secretKey = process.env.NCP_secretKey;
const accessKey = process.env.NCP_accessKey;

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
const send = async function (req, res) {
  const phoneNumber = req.body.phoneNumber;

  Cache.del(phoneNumber);

  const verifyCode = Math.floor(Math.random() * (999999 - 100000)) + 100000;

  Cache.put(phoneNumber, verifyCode.toString());

  // const result = await axios.post(
  //   `https://sens.apigw.ntruss.com/sms/v2/services/${serviceId}/messages`,
  //   {
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //       "x-ncp-iam-access-key": accessKey,
  //       "x-ncp-apigw-timestamp": timestamp,
  //       "x-ncp-apigw-signature-v2": signature,
  //     },
  //     data: {
  //       type: "SMS",
  //       contentType: "COMM",
  //       countryCode: "82",
  //       from: "01099169937",
  //       content: `[저기어때] 인증번호 [${verifyCode}]를 입력해주세요.`,
  //       messages: [
  //         {
  //           to: `${phoneNumber}`,
  //         },
  //       ],
  //     },
  //   }
  // );

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
    .then(function () {
      console.log(res.requestId); // 요청 아이디
      res.status(202).json({ message: "SMS_SEND_SUCCESS" });
    })
    .catch((err) => {
      console.log(err);
      // if (err.response.data.status == 202) {
      if (err.res == undefined) {
        res.status(202).json({ message: "SMS_SEND_SUCCESS" });
      } else res.status(404).json({ message: "SMS_SEND_FAILURE" });
    });
};

const verify = async function (req, res) {
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

module.exports = { send, verify };
