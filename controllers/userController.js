const userService = require("../services/userService");
// const {
//   validateEmail,
//   validatePassword,
//   validateNumber,
// } = require("../utils/validation");

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

    if (!result) {
      return res.status(400).json({ message: "EMAIL_ALREADY_USE" });
    }

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
    const userId = user.user.id;

    if (!user) {
      res.status(404).json({ message: "EMAIL_INCORRECT" });
      return;
    }
    if (!user.isPasswordCorrect) {
      res.status(400).json({ message: "PASSWORD_INCORRECT" });
      return;
    }

    res
      .status(200)
      .json({ message: "LOGIN_SUCCESS!", token: user.token, userId: userId });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const kakaoToken = async (req, res) => {
  try {
    const kakaoCode = req.get("code");

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
    const kakaoToken = req.headers.authorization;
    // console.log("카카오토큰", kakaoToken);
    const getUserByKakao = await userService.kakaoLogin(kakaoToken);

    res.status(200).json({
      message: "LOGIN_SUCCESS!",
      token: getUserByKakao.token,
      userId: getUserByKakao.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getUserData = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await userService.getUserData(userId);

    return res.status(201).json({ data: user });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const updateNickName = async (req, res) => {
  try {
    const { nickName } = req.body;
    const userId = req.userId;

    await userService.updateNickName(userId, nickName);

    return res.status(200).json({ message: "UPDATE_NICKNAME", data: nickName });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const updateName = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.userId;

    await userService.updateName(userId, name);

    return res.status(200).json({ message: "UPDATE_NAME", data: name });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getUserPoint = async (req, res) => {
  try {
    const userId = req.userId;

    const point = await userService.getUserPoint(userId);

    return res.status(201).json({ data: point });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const updatePhoneNumber = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const userId = req.userId;

    await userService.updatePhoneNumber(userId, phoneNumber);

    return res.status(200).json({ message: "UPDATE_NAME", data: phoneNumber });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  userCreated,
  userLogin,
  kakaoToken,
  kakaoLogin,
  getUserData,
  updateNickName,
  updateName,
  getUserPoint,
  updatePhoneNumber,
};
