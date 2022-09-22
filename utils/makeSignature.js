const secret_key = require("../config/secret_sms");

const CryptoJS = require("crypto-js");

function signature() {
  const space = " "; // one space
  const newLine = "\n"; // new line
  const method = "POST"; // method
  const accessKey = secret_key.NCP_accessKey; // access key id (from portal or Sub Account)
  const secretKey = secret_key.NCP_secretKey; // secret key (from portal or Sub Account)
  const serviceId = secret_key.NCP_serviceID;
  const url = `/sms/v2/services/${serviceId}/messages`; // url (include query string)
  const timestamp = Date.now().toString(); //현재 시간을 string 타입으로 저장;

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey); // SHA-256 알고리즘으로 암호화
  hmac.update(method);
  hmac.update(space);
  hmac.update(url);
  hmac.update(newLine);
  hmac.update(timestamp);
  hmac.update(newLine);
  hmac.update(accessKey);
  const hash = hmac.finalize();

  return hash.toString(CryptoJS.enc.Base64);
}

module.exports = { signature };
