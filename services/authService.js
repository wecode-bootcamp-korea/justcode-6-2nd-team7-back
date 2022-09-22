const saveAuthCode = async (phoneNumber, code) => {
  await client.set(phoneNumber, code, { EX: 180 });
};

const sendMessageService = async (to, content) => {
  const timestamp = Date.now() + "";
  const signature = getSignature(SMS_ID, ACCESS_KEY, SECRET_KEY, timestamp);

  const messages =
    to instanceof Array
      ? to.map((number) => new Object({ to: number }))
      : [{ to: to }];

  const body = JSON.stringify({
    type: "SMS",
    countryCode: "82",
    from: "01047474747",
    content,
    messages,
  });

  const response = await fetch(
    `https://sens.apigw.ntruss.com/sms/v2/services/${SMS_ID}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charse=utf-8",
        "x-ncp-apigw-timestamp": timestamp,
        "x-ncp-iam-access-key": `${ACCESS_KEY}`,
        "x-ncp-apigw-signature-v2": signature,
      },
      body: body,
    }
  );

  const result = await response.json();

  if (result.statusCode === "202") {
    return 1;
  } else {
    return 0;
  }
};

module.exports = { saveAuthCode };
