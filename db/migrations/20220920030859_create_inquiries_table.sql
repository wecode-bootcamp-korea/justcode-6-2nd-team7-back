-- migrate:up
CREATE TABLE inquiries (
  id INT NOT NULL AUTO_INCREMENT,
  category_type VARCHAR(50),
  inquiry_type VARCHAR(50),
  phone_number VARCHAR(50),
  email VARCHAR(50),
  content VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY(id)
);

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE inquiries;
SET FOREIGN_KEY_CHECKS = 1;
