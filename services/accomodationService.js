const accomodationDao = require("../models/accomodationDao.js");

const accomodationCategory = async (
  id,
  reserve,
  grade,
  facility,
  persons,
  bed_type,
  sort
) => {
  console.log("accomodationCategory Service");
  if (id === "motel") {
    id = 1;
  } else if (id === "hotel") {
    id = 2;
  } else if (id === "pension") {
    id = 3;
  } else if (id === "guesthouse") {
    id = 4;
  } else if (id === "camping") {
    id = 5;
  } else if (id === "hanok") {
    id = 6;
  } else {
    res.status(400).json({ message: "해당되는 카테고리가 존재하지 않습니다." });
  }

  if (sort != undefined) {
    if (typeof sort == "string") {
      sort = sort;
    }
  } else {
    sort = null;
  }

  if (reserve != undefined) {
    if (typeof reserve == "string") {
      reserve = [reserve];
    }
  } else {
    reserve = "null";
  }

  if (grade != undefined) {
    if (typeof grade == "string") {
      grade = [grade];
    }
  } else {
    grade = "null";
  }

  if (facility != undefined) {
    if (typeof facility == "string") {
      facility = [facility];
    }
  } else {
    facility = "null";
  }

  if (persons != undefined) {
    if (typeof persons == "string") {
      persons = [persons];
    }
  } else {
    persons = "null";
  }

  if (bed_type != undefined) {
    if (typeof bed_type == "string") {
      bed_type = [bed_type];
    }
  } else {
    bed_type = "null";
  }

  const accomodationCategory = await accomodationDao.accomodationCategory(
    id,
    reserve,
    grade,
    facility,
    persons,
    bed_type,
    sort
  );
  return accomodationCategory;
};

const accomodationFilter = async (
  accno,
  reserve,
  grade,
  facility,
  persons,
  bed_type,
  sort,
  date1,
  date2
) => {
  console.log("accomodationFilter Service");

  if (accno != undefined) {
    if (typeof accno == "string") {
      accno = [accno];
    }
  } else {
    accno = "null";
  }

  if (reserve != undefined) {
    if (typeof reserve == "string") {
      reserve = [reserve];
    }
  } else {
    reserve = "null";
  }

  if (grade != undefined) {
    if (typeof grade == "string") {
      grade = [grade];
    }
  } else {
    grade = "null";
  }

  if (facility != undefined) {
    if (typeof facility == "string") {
      facility = [facility];
    }
  } else {
    facility = "null";
  }

  if (persons != undefined) {
    if (typeof persons == "string") {
      persons = [persons];
    }
  } else {
    persons = "null";
  }

  if (bed_type != undefined) {
    if (typeof bed_type == "string") {
      bed_type = [bed_type];
    }
  } else {
    bed_type = "null";
  }

  if (sort != undefined) {
    if (typeof bed_type == "string") {
      sort = [sort];
    }
  } else {
    sort = "null";
  }

  if (date1 != undefined) {
    if (typeof date1 == "string") {
      date1 = [date1];
    }
  } else {
    date1 = "null";
  }

  if (date2 != undefined) {
    if (typeof date2 == "string") {
      date2 = [date2];
    }
  } else {
    date2 = "null";
  }

  const accomodationFilter = await accomodationDao.accomodationFilter(
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

  return accomodationFilter;
};

const accomodationData = async (acno) => {
  console.log("detailPage Service");

  const roomData = await accomodationDao.accomodationData(acno);
  return roomData;
};

const hotelImg = async (acno) => {
  const hotelImg = await accomodationDao.hotelImg(acno);
  return hotelImg;
};

const roomData = async (acno) => {
  const roomData = await accomodationDao.roomData(acno);

  return roomData;
};

const roomPicture = async (id) => {
  const roomPicture = await accomodationDao.roomPicture(id);
  return roomPicture;
};

const accomodationSearch = async (
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
) => {
  console.log("accomodation Search Service");
  if (keyword != undefined) {
    if (typeof keyword == "string") {
      keyword = [keyword];
    }
  } else {
    keyword = "null";
  }

  if (accno != undefined) {
    if (typeof accno == "string") {
      accno = [accno];
    }
  } else {
    accno = "null";
  }

  if (reserve != undefined) {
    if (typeof reserve == "string") {
      reserve = [reserve];
    }
  } else {
    reserve = "null";
  }

  if (grade != undefined) {
    if (typeof grade == "string") {
      grade = [grade];
    }
  } else {
    grade = "null";
  }

  if (facility != undefined) {
    if (typeof facility == "string") {
      facility = [facility];
    }
  } else {
    facility = "null";
  }

  if (persons != undefined) {
    if (typeof persons == "string") {
      persons = [persons];
    }
  } else {
    persons = "null";
  }

  if (bed_type != undefined) {
    if (typeof bed_type == "string") {
      bed_type = [bed_type];
    }
  } else {
    bed_type = "null";
  }

  if (sort != undefined) {
    if (typeof bed_type == "string") {
      sort = [sort];
    }
  } else {
    sort = null;
  }

  const accomodationSearch = await accomodationDao.accomodationSearch(
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

  return accomodationSearch;
};
module.exports = {
  accomodationCategory,
  accomodationFilter,
  accomodationData,
  hotelImg,
  roomData,
  roomPicture,
  accomodationSearch,
};
