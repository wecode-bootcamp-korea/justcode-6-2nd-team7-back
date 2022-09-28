const reservationDao = require("../models/reservationDao");

const reservationStatus = async (id) => {
  const reservationStatus = await reservationDao.reservationStatus(id);

  if ((reservationStatus.day1 = "1")) {
    reservationStatus.day1 = "화";
  }
  console.log(reservationStatus);
  return reservationStatus;
};

const deleteReservation = async (id) => {
  const deleteReservation = await reservationDao.deleteReservation(id);
  return deleteReservation;
};

module.exports = {
  reservationStatus,
  deleteReservation,
};
