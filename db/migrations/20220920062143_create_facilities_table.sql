-- migrate:up
CREATE TABLE facilities (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  PRIMARY KEY (id)
);

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE facilities;
SET FOREIGN_KEY_CHECKS = 1;