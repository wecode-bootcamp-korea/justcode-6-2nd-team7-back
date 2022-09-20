const userService = require("../services/userService");
const {
  validateEmail,
  validatePassword,
  validateNumber,
} = require("../utils/validation");

const userCreated = async (req, res) => {
  try {
    const { email, password, nickName, phoneNumber } = req.body;

    if (!(email && password && nickName && phoneNumber)) {
      return res.status(400).json({ message: "KEY ERROR" });
    }

    validateEmail(email);
    validatePassword(password);
    validateNumber(phoneNumber);

    const result = await userService.userCreated(
      email,
      password,
      nickName,
      phoneNumber
    );

    if (!result) {
      return res.status(400).json({ message: "EMAIL_ALREADY_USE" });
    }

    res.status(201).json({ message: "userCreated" });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { userCreated };
