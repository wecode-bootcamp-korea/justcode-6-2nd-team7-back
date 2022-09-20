-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  nickname VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  phone_number VARCHAR(50) NOT NULL,
  point INT NOT NULL,
  coupon INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE users;
