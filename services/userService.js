const userDao = require("../models/userDao");
const authDao = require("../models/authDao");

const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const secret = process.env.TOKEN_SECRET;
const secret = "JGUD";

const userCreated = async (email, password, nickName, phoneNumber) => {
  const userCheck = await authDao.getUserByEmail(email);

  if (!userCheck) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPw = bcrypt.hashSync(password, salt);
    const user = await userDao.userCreated(
      email,
      hashedPw,
      nickName,
      phoneNumber
    );

    return user;
  } else {
    const user = false;
    return user;
  }
};

const userLogin = async (email, password) => {
  const user = await authDao.getUserByEmail(email);
  console.log("확인1", user);
  console.log("확인2", secret);
  if (user) {
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    const token = jwt.sign({ userId: user.id }, secret);
    const userLoginData = {
      user: user,
      isPasswordCorrect: isPasswordCorrect,
      token: token,
    };
    return userLoginData;
  }
};

const kakaoToken = async (kakaoCode) => {
  const clientId = process.env.REST_API;
  const redirectUri = process.env.REDIRECT_URI;
  console.log(redirectUri);
  const result = await axios.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${clientId}&redirect_uri=${redirectUri}&code=${kakaoCode}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
  const accessToken = result.data.access_token;

  if (!accessToken) {
    const err = new Error("ACCESS_TOKEN_ERROR");
    err.statusCode = 400;
    throw err;
  }
  return accessToken;
};

const kakaoLogin = async (kakaoToken) => {
  const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
    },
  });

  const nickName = result.data.kakao_account.profile.nickname.replace(
    /a/gi,
    ""
  );
  const email = result.data.kakao_account.email;
  const kakaoId = result.data.id;
  console.log("카카오에서 가져온 닉네임 =", nickName);
  console.log("카카오에서 가져온 이메일 =:", email);
  console.log("카카오에서 가저온 userID =", kakaoId);

  if (!(nickName && email && kakaoId)) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  const userLoginByKakao = await authDao.getUserByKakaoId(kakaoId);
  if (!userLoginByKakao) await userDao.signupByKakao(nickName, email, kakaoId);

  const user = await authDao.getUserByKakaoId(kakaoId);
  const userId = user.id;
  const token = jwt.sign({ userId }, secret);
  const getUserByKakao = {
    token: token,
    userId: userId,
  };
  return getUserByKakao;
};

const getUserData = async (userId) => {
  const getUserDataById = await userDao.getUserData(userId);
  return getUserDataById;
};

const updateNickName = async (userId, nickName) => {
  const updateUserNickName = await userDao.updateNickName(userId, nickName);
  return updateUserNickName;
};

const updateName = async (userId, name) => {
  const updateUserName = await userDao.updateName(userId, name);
  return updateUserName;
};

const getUserPoint = async (userId) => {
  let getUserPointById = await userDao.getUserPoint(userId);

  if (!getUserPointById.pintId) {
    const pointCreated = await userDao.pointCreated(userId);
    const getPoint = await userDao.getUserPoint(userId);
    return getPoint;
  } else {
    return getUserPointById;
  }
};

const updatePhoneNumber = async (userId, phoneNumber) => {
  const updateUserPhoneNumber = await userDao.updatePhoneNumber(
    userId,
    phoneNumber
  );
  return updateUserPhoneNumber;
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
