const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const accomodationRouter = require("./accomodationRouter");
const reservationRouter = require("./reservationRouter");
const reviewRouter = require("./reviewRouter");

router.get("/", (req, res) => {
  res.json({ message: "/ pong" });
});

router.use(userRouter);
router.use(accomodationRouter);
router.use(reservationRouter);
router.use(reviewRouter);

module.exports = router;
