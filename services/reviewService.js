const reviewDao = require("../models/reviewDao");

const getReview = async (accomodationId) => {
  const getReviewById = await reviewDao.getReview(accomodationId);
  return getReviewById;
};

module.exports = { getReview };
