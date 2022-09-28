const reservationService = require("../services/reservationService");

const reservationStatus = async (req, res) => {
  const { id } = req.headers;

  if (!id) {
    res.status(400).json({ message: "아이디 안보내주셨어요,,," });
    return;
  }

  try {
    const reservationStatus = await reservationService.reservationStatus(id);
    res.status(200).json({ reservation: reservationStatus });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
};

const deleteReservation = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    res.status(400).json({ message: "아이디 안보내주셨어요,,," });
    return;
  }

  try {
    const deleteReservation = await reservationService.deleteReservation(id);
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
};

module.exports = {
  reservationStatus,
  deleteReservation,
};
