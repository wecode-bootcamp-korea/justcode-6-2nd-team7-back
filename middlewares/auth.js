const authDao = require("../models/authDao");
const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET;

const validationToken = async (req, res, next) => {
  try {
    console.log("req확인", req.headers);
    const accessToken = req.headers.authorization;
    console.log("토큰확인", accessToken);
    const accessToken2 = accessToken.split(" ")[1];
    const decode = await jwt.verify(accessToken2, secret);
    const userId = decode.userId;
    const user = await authDao.getUserById(userId);
    if (!user) {
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
