const express = require("express");

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/send", authController.smsSend);
router.post("/validation", authController.verify);

router.post("/signup", userController.userCreated);
router.post("/login", userController.userLogin);

router.post("/kakaoToken", userController.kakaoToken);
router.post("/kakao", userController.kakaoLogin);

router.get("/my", auth.validationToken, userController.getUserData);
router.get("/my/point", auth.validationToken, userController.getUserPoint);

router.patch(
  "/my/nickName",
  auth.validationToken,
  userController.updateNickName
);
router.patch("/my/name", auth.validationToken, userController.updateName);
router.patch(
  "/my/phoneNumber",
  auth.validationToken,
  userController.updatePhoneNumber
);

module.exports = router;
