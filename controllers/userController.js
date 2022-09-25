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
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    // validateEmail(email);
    // validatePassword(password);
    // validateNumber(phoneNumber);

    const result = await userService.userCreated(
      email,
      password,
      nickName,
      phoneNumber
    );

    // if (!result) {
    //   return res.status(400).json({ message: "EMAIL_ALREADY_USE" });
    // }

    res.status(201).json({ message: "SIGNUP_SUCCESS!" });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).json({ message: "KEY_ERROR" });
      return;
    }

    // validateEmail(email);
    // validatePassword(password);

    const user = await userService.userLogin(email, password);

    if (!user) {
      res.status(404).json({ message: "EMAIL_INCORRECT" });
      return;
    }
    if (!user.isPasswordCorrect) {
      res.status(400).json({ message: "PASSWORD_INCORRECT" });
      return;
    }

    res.status(200).json({ message: "LOGIN_SUCCESS!", token: user.token });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const kakaoToken = async (req, res) => {
  try {
    const kakaoCode = req.get("code");
    console.log(kakaoCode);
    const accessToken = await userService.kakaoToken(kakaoCode);

    res
      .status(200)
      .json({ message: "KAKAO_TOKEN_SUCCESS!", Authorization: accessToken });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json({ message: err.message });
  }
};

const kakaoLogin = async (req, res) => {
  try {
    const kakaoToken = req.get("Authorization");
    console.log("t1", kakaoToken);

    const token = await userService.kakaoLogin(kakaoToken);

    res.status(200).json({ message: "LOGIN_SUCCESS!", token: token });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { userCreated, userLogin, kakaoToken, kakaoLogin };
