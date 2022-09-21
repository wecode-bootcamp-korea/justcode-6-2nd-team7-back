const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", userController.userCreated);

// 문자인증 ( naver sens를 통한 ) 전송 api
router.post("/send", authController.send);

// 문자인증 검증 api
router.post("/validation", authController.verify);

module.exports = router;
