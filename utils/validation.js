const validateEmail = (email) => {
  const validate = new RegExp(
    /^[A-Za-z0-9\.\-]+\@[A-Za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/
  );
  if (!validate.test(email)) {
    const err = new Error("EMAIL_INVALID");
    err.statusCode = 400;
    throw err;
  }
};

const validatePassword = (password) => {
  if (password.length < 10) {
    const err = new Error("PASSWORD_INVALID");
    err.statusCode = 400;
    throw err;
  }
};

const validateNumber = (phoneNumber) => {
  const validate = new RegExp(/^\d{10,11}$/);
  if (!validate.test(phoneNumber)) {
    const err = new Error("PHONENUMBER_INVALID");
    err.statusCode = 400;
    throw err;
  }
};

//4자리 숫자로 암호화 진행
const codeCreate = () => {
  const code = math.floor(1000 + math.random() * 9000);
  return code + " ";
};

module.exports = {
  validateEmail,
  validatePassword,
  validateNumber,
  codeCreate,
};
