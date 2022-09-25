const { myDataSource } = require("../utils/dataSource");

const userCheck = async (email) => {
  console.log("dao1");
  const [user] = await myDataSource.query(
    `
      SELECT id
      FROM users
      WHERE email = '${email}'
      `
  );
  return user;
};

const userCreated = async (email, hashedPw, nickName, phoneNumber) => {
  try {
    const user = await myDataSource.query(
      `
      INSERT INTO users(email, password, nickname, name, phone_number, point, coupon, kakao_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        email,
        hashedPw,
        nickName,
        "Margot Elise Robbie",
        phoneNumber,
        "0",
        "0",
        "0",
      ]
    );
    return user;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

const userLogin = async (email) => {
  try {
    console.log("dao1");
    const [user] = await myDataSource.query(
      `
      SELECT *
      FROM users
      WHERE email = '${email}'
      `
    );
    return user;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

const signupByKakao = async (nickName, email, kakaoId) => {
  try {
    console.log("d1:", nickName);
    console.log("d1:", email);
    console.log("d1:", kakaoId);
    const user = await myDataSource.query(
      `
      INSERT INTO users(email, password, nickname, name, phone_number, point, coupon, kakao_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [email, "0000", nickName, nickName, null, "0", "0", kakaoId]
    );
    return user;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT_singup");
    error.statusCode = "500";
    throw error;
  }
};

const userLoginByKakao = async (kakaoId) => {
  // try {
  const [user] = await myDataSource.query(
    `
      SELECT *
      FROM users
      WHERE kakao_id = '${kakaoId}'
      `
  );
  return user;
  // } catch (err) {
  //   const error = new Error("INVALID_DATA_INPUT");
  //   error.statusCode = "500";
  //   throw error;
  // }
};

module.exports = {
  userCheck,
  userCreated,
  userLogin,
  signupByKakao,
  userLoginByKakao,
};
