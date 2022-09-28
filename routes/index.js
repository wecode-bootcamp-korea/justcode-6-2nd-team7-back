const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const accomodationRouter = require("./accomodationRouter");
const reservationRouter = require("./reservationRouter");

router.get("/", (req, res) => {
  res.json({ message: "/ pong" });
});

router.use(userRouter);
router.use(accomodationRouter);
router.use(reservationRouter);

module.exports = router;
