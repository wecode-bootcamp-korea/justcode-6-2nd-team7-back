const express = require("express");

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

// 회원가입
router.post("/signup", userController.userCreated);

// 문자인증 ( naver sens를 통한 ) 전송 api
router.post("/send", authController.send);

// 문자인증 검증 api
router.post("/validation", authController.verify);

// 로그인
router.post("/login", userController.userLogin);

// 카카오 토큰 발급
router.post("/kakaoToken", userController.kakaoToken);

// 카카오 로그인
router.post("/kakao", userController.kakaoLogin);

module.exports = router;
