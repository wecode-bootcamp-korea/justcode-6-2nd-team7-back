const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const reviewRouter = require("./reviewRouter");

router.get("/", (req, res) => {
  res.json({ message: "/ pong" });
});

router.use(userRouter);
router.use(reviewRouter);

module.exports = router;
