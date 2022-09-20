const { myDataSource } = require("../utils/dataSource");

const userCreated = async (email, hashedPw, nickName, phoneNumber) => {
  const user = await myDataSource.query(
    `
    INSERT INTO users(email, password, nickname, phone_number)
    VALUES (?, ?, ?, ?)
  `,
    [email, hashedPw, nickName, phoneNumber]
  );
  return user;
};

const userLogin = async (email) => {
  const [user] = await myDataSource.query(
    `
    SELECT *
    FROM users
    WHERE email = ?
  `,
    [email]
  );
  return user;
};

module.exports = { userCreated, userLogin };
