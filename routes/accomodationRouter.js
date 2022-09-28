const express = require("express");
const accomodationController = require("../controllers/accomodationController.js");

const router = express.Router();

router.get("/accomodations/:id", accomodationController.accomodationCategory);
router.get("/accomodation/search", accomodationController.accomodationFilter);
router.get("/accomodation/rooms/details", accomodationController.detailPage);
router.get("/accomodation/result", accomodationController.accomodationSearch);

module.exports = router;
