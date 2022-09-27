const reviewService = require("../services/reviewService");

const getReview = async (req, res) => {
  try {
    const accomodationId = req.params.accomodationId;
    const getReviewById = await reviewService.getReview(accomodationId);

    return res.status(201).json({ comment: getReviewById });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getReview };
