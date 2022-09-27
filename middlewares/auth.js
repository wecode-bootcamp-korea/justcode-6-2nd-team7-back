const authDao = require("../models/authDao");
const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET;

const validationToken = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;
    // console.log("들어온 headers data:", req.headers);
    console.log("들어온 body data:", req.body);
    console.log("headers에서 추출한 토큰값:", accessToken);

    const accessToken2 = accessToken.split(" ")[1];
    const decode = await jwt.verify(accessToken2, secret);
    const userId = decode.userId;
    const user = await authDao.getUserById(userId);
    if (!user) {
      console.log("에러발생");
      res.status(404).json({ message: "USER_NOT_FOUND" });
    } else {
      req.userId = userId;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { validationToken };
