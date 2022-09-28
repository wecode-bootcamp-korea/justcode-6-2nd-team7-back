const { myDataSource } = require("../utils/dataSource");

const reservationStatus = async (id) => {
  const reservationStatus = await myDataSource.query(
    `
    SELECT
      reservations.id as reservation_id,
      accomodations.id as hotel_id,
      accomodations.name as name,
      accomodations.thumbnail_image as img,
      DATE_FORMAT(reservations.check_in, '%m-%d') as date1,
      DATE_FORMAT(reservations.check_out, '%m-%d') as date2,
      WEEKDAY(reservations.check_in) as day1,
      WEEKDAY(reservations.check_out) as day2,
      TO_DAYS(reservations.check_out) - TO_DAYS(reservations.check_in) as myutbak
    FROM users
    
    INNER JOIN reservations ON users.id = reservations.user_id
    INNER JOIN accomodations ON reservations.accomodation_id = accomodations.id


    WHERE users.id = ?
    `,
    [id]
  );
  return reservationStatus;
};

const deleteReservation = async (id) => {
  const deleteReview = await myDataSource.query(
    `
    DELETE FROM reviews WHERE reviews.reservation_id = ?
    `,
    [id]
  );
  const deleteReservation = await myDataSource.query(
    `

    DELETE FROM reservations WHERE reservations.id = ?
    `,
    [id]
  );
  return deleteReview, deleteReservation;
};

module.exports = {
  reservationStatus,
  deleteReservation,
};
