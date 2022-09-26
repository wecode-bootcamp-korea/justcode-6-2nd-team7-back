const express = require("express");

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

const router = express.Router();

// 문자인증 ( naver sens를 통한 ) 전송 API
router.post("/send", authController.send);

// 문자인증 검증 API
router.post("/validation", authController.verify);

// 회원가입
router.post("/signup", userController.userCreated);

// 로그인
router.post("/login", userController.userLogin);

// 카카오 토큰 발급
router.post("/kakaoToken", userController.kakaoToken);

// 카카오 로그인
router.post("/kakao", userController.kakaoLogin);

// 내 정보 관리
router.get("/my", auth.validationToken, userController.getUserData);

// 닉네임 수정
router.patch(
  "/my/nickName",
  auth.validationToken,
  userController.updateNickName
);

// 예약자 이름 수정
router.patch("/my/name", auth.validationToken, userController.updateName);

// 핸드폰번호 수정
router.patch(
  "/my/phoneNumber",
  auth.validationToken,
  userController.updatePhoneNumber
);

// 포인트 조회
router.get("/my/point", auth.validationToken, userController.getUserPoint);

module.exports = router;
