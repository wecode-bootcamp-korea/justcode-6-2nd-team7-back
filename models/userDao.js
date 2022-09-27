const { myDataSource } = require("../utils/dataSource");

const userCreated = async (email, hashedPw, nickName, phoneNumber) => {
  try {
    const user = await myDataSource.query(
      `
      INSERT INTO users(email, password, nickname, name, phone_number, kakao_id)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [email, hashedPw, nickName, "이름", phoneNumber, "0"]
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
    console.log("저장할 닉네임:", nickName);
    console.log("저장할 이메일:", email);
    console.log("저장할 카카오유저아이디:", kakaoId);
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

const getUserData = async (userId) => {
  try {
    const user = await myDataSource.query(
      `
        SELECT
          users.id as userId,
          users.email as userEmail,
          users.nickname as userNickName,
          users.name as userName,
          users.phone_number as userPhoneNumber
        FROM users
        WHERE id = ${userId}
      `
    );
    return user;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

const updateNickName = async (userId, nickName) => {
  try {
    return await myDataSource.query(
      `
        UPDATE users
        SET
          nickname = '${nickName}'
        WHERE id = ${userId}
      `
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

const updateName = async (userId, name) => {
  try {
    return await myDataSource.query(
      `
        UPDATE users
        SET
          name = '${name}'
        WHERE id = ${userId}
      `
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

const updatePhoneNumber = async (userId, phoneNumber) => {
  try {
    return await myDataSource.query(
      `
        UPDATE users
        SET
          phone_number = '${phoneNumber}'
        WHERE id = ${userId}
      `
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

const getUserPoint = async (userId) => {
  try {
    const user = await myDataSource.query(
      `
      SELECT
        points.id as pointId,
        points.point as point,
        points.history as history
      FROM points
      JOIN users ON users.id = user_id
      WHERE user_id = ${userId}
      `
    );
    return user;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

module.exports = {
  userCreated,
  signupByKakao,
  getUserData,
  updateNickName,
  updateName,
  getUserPoint,
  updatePhoneNumber,
};
