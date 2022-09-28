const { myDataSource } = require("../utils/dataSource");

const createUser = async (email, password, name) => {
  await myDataSource.query(
    `INSERT INTO users (
      email,
      password,
      name
    ) VALUES (?,?,?)`,
    [email, password, name]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await myDataSource.query(
    `
    SELECT *
    FROM users
    WHERE users.email ='${email}'
    `
  );
  return user;
};

const getUserById = async (userId) => {
  const [user] = await myDataSource.query(
    `
    SELECT *
    FROM users
    WHERE users.id = '${userId}'
    `
  );
  return user;
};

const getUserByKakaoId = async (kakaoId) => {
  const [user] = await myDataSource.query(
    `
      SELECT *
      FROM users
      WHERE kakao_id = '${kakaoId}'
    `
  );
  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  getUserByKakaoId,
};
