const { myDataSource } = require("../utils/dataSource");

const getReview = async (accomodationId) => {
  console.log("검사1", accomodationId);
  try {
    const reviewList = await myDataSource.query(
      `
        SELECT
          reviews.id AS id,
          accomodation_rooms.name AS roomType,
          users.nickname AS nickName,
          reviews.rating AS rating,
          reviews.comment AS comment,
          reviews.img AS img
        FROM reviews
        INNER JOIN accomodation_rooms ON reviews.room_id = accomodation_rooms.id
        INNER JOIN users ON user_id = users.id
        WHERE reviews.accomodation_id = ${accomodationId}
      `
    );
    return reviewList;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

module.exports = { getReview };
