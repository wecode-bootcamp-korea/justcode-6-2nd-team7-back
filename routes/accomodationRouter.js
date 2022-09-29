const express = require("express");
const accomodationController = require("../controllers/accomodationController.js");

const router = express.Router();

router.get("/accommodations/:id", accomodationController.accomodationCategory);
router.get("/accommodation/search", accomodationController.accomodationFilter);
router.get("/accommodation/rooms/details", accomodationController.detailPage);
router.get("/accommodation/result", accomodationController.accomodationSearch);

module.exports = router;
