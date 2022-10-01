const axios = require("axios");
const Cache = require("memory-cache");
const CryptoJS = require("crypto-js");

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

const smsSend = async function (phoneNumber) {
  Cache.del(phoneNumber);
  const verifyCode = Math.floor(Math.random() * 900000) + 100000;
  Cache.put(phoneNumber, verifyCode.toString());

  const response = await axios({
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
  });
  const request = response.data;
  const statusCode = request.statusCode;

  if (statusCode !== "202") {
    const err = new Error("SMS_SEND_FAILURE");
    err.statusCode = statusCode;
    throw err;
  }
  return request;
};

const verify = async function (phoneNumber, verifyCode) {
  const CacheData = Cache.get(phoneNumber);

  if (!CacheData) {
    const err = new Error("FAILURE_SMS_AUTHENTICATION");
    err.statusCode = 400;
    throw err;
  }

  if (CacheData !== verifyCode) {
    const err = new Error("FAILURE_SMS_AUTHENTICATION");
    err.statusCode = 400;
    throw err;
  }
  Cache.del(phoneNumber);
  return CacheData;
};

module.exports = { smsSend, verify };
