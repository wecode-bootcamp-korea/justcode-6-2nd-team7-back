const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");

router.get("/", (req, res) => {
  res.json({ message: "/ pong" });
});

router.use(userRouter);

module.exports = router;
