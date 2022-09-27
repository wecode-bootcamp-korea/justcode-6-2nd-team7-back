const reviewService = require("../services/reviewService");

const getReview = async (req, res) => {
  console.log("con1");
  try {
    // console.log(req);
    console.log("test1");
    const accomodationId = req.params.accomodationId;
    console.log(accomodationId);
    const getReviewById = await reviewService.getReview(accomodationId);
    return res.status(201).json({ comment: getReviewById });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getReview };
