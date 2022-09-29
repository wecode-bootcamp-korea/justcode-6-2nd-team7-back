const { json } = require("body-parser");
const accomodationService = require("../services/accomodationService");
const reviewService = require("../services/reviewService");

const accomodationCategory = async (req, res) => {
  console.log("accomodationCategory controller");
  const category_id = req.params;
  const { reserve, grade, facility, persons, bed_type, sort } = req.query;
  const id = category_id.id;
  console.log(id);
  if (!id) {
    res.status(400).json({ message: "데이터가 존재하지 않습니다" });
    return;
  }
  try {
    const accomodationCategory = await accomodationService.accomodationCategory(
      id,
      reserve,
      grade,
      facility,
      persons,
      bed_type,
      sort
    );
    res.send(accomodationCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
};

const accomodationFilter = async (req, res) => {
  console.log("accomodationFilter Controller");
  const {
    accno,
    reserve,
    grade,
    facility,
    persons,
    bed_type,
    sort,
    date1,
    date2,
  } = req.query;
  console.log(sort);
  try {
    const accomodationFilter = await accomodationService.accomodationFilter(
      accno,
      reserve,
      grade,
      facility,
      persons,
      bed_type,
      sort,
      date1,
      date2
    );
    res.status(200).json(accomodationFilter);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
};

const accomodationData = async (req, res) => {
  console.log("roomData Controller");
  const { date1, date2 } = req.query;

  try {
    const roomData = await accomodationService.roomData(date1, date2);
    res.status(200).json(roomData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
};

const detailPage = async (req, res) => {
  const { acno } = req.query;
  console.log("detailPage Controller");
  try {
    let accomodationData = await accomodationService.accomodationData(acno);
    let hotelImg = await accomodationService.hotelImg(acno);
    let roomData = await accomodationService.roomData(acno);
    let getReview = await reviewService.getReview(acno);

    for (i = 0; i < roomData.length; i++) {
      let id = roomData[i].id;
      let roomPicture = await accomodationService.roomPicture(id);
      roomData[i].image = roomPicture;
    }

    for (i = 0; i < accomodationData.length; i++) {
      accomodationData[i].roomImg = hotelImg;
      accomodationData[i].roomTypes = roomData;
      accomodationData[i].comment = getReview;
    }

    res.status(200).json({ roomTypeData: accomodationData });
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

const accomodationSearch = async (req, res) => {
  const {
    keyword,
    accno,
    reserve,
    grade,
    facility,
    persons,
    bed_type,
    sort,
    date1,
    date2,
  } = req.query;
  console.log("accomodation Search Controller");

  try {
    let accomodationSearch = await accomodationService.accomodationSearch(
      keyword,
      accno,
      reserve,
      grade,
      facility,
      persons,
      bed_type,
      sort,
      date1,
      date2
    );
    res.status(200).json(accomodationSearch);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mesasge: "error" });
  }
};

module.exports = {
  accomodationCategory,
  accomodationFilter,
  accomodationData,
  detailPage,
  accomodationSearch,
};
