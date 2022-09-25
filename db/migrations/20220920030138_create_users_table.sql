-- migrate:up
CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(200) NULL,
  nickname VARCHAR(50)  NULL,
  name VARCHAR(50)  NULL,
  phone_number VARCHAR(50) NULL,
  point INT NULL,
  coupon INT NULL,
  kakao_id VARCHAR(50) NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (id)
);

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE users;
SET FOREIGN_KEY_CHECKS = 1;