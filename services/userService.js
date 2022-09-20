const userDao = require("../models/userDao");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userCreated = async (email, password, nickName, phoneNumber) => {
  const userCheck = await userDao.userLogin(email);

  if (!userCheck) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPw = bcrypt.hashSync(password, salt);
    const user = await userDao.userCreated(
      email,
      hashedPw,
      nickName,
      phoneNumber
    );
    return user;
  } else {
    const user = false;
    return user;
  }
};

module.exports = { userCreated };
