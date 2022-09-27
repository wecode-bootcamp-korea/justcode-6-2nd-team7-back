const authService = require("../services/authService");

const smsSend = async function (req, res) {
  try {
    const phoneNumber = req.body.phoneNumber;
    const send = await authService.smsSend(phoneNumber);
    res.status(202).json({ message: "SMS_SEND_SUCCESS" });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const verify = async function (req, res) {
  try {
    const { phoneNumber, verifyCode } = req.body;

    await authService.verify(phoneNumber, verifyCode);

    res.status(200).json({ message: "SMS_VERIFY_SUCCESS" });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { smsSend, verify };
