const express = require("express");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

// router.get("/review", reviewController.getReview);
router.get("/review/:accomodationId", reviewController.getReview);

module.exports = router;
