const express = require("express");
const reservationController = require("../controllers/reservationController.js");

const router = express.Router();

router.get("/my/reservations", reservationController.reservationStatus);
router.delete("/my/reservations", reservationController.deleteReservation);

module.exports = router;
