const userDao = require("../models/userDao");

const qs = require("qs");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET;

const userCreated = async (email, password, nickName, phoneNumber) => {
  const userCheck = await userDao.userCheck(email);
  console.log("service1");

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
  const user = await userDao.userLogin(email);

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
  console.log("te1", clientId);
  console.log("te1", redirectUri);

  const result = await axios.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${clientId}&redirect_uri=${redirectUri}&code=${kakaoCode}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
  console.log("test", result);
  const accessToken = result.data.access_token;
  console.log("kakaoToken", accessToken);

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
  console.log("n1:", nickName);
  console.log("n1:", email);
  console.log("n1:", kakaoId);

  if (!(nickName && email && kakaoId)) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  const userLoginByKakao = await userDao.userLoginByKakao(kakaoId);
  if (!userLoginByKakao) await userDao.signupByKakao(nickName, email, kakaoId);

  const token = jwt.sign({ kakaoId }, secret);
  console.log(token);
  return token;
};

module.exports = { userCreated, userLogin, kakaoToken, kakaoLogin };
