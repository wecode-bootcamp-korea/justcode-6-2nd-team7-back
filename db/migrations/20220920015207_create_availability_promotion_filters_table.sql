-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS availability_promotion_filters (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  reserve_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id),
  FOREIGN KEY(reserve_id) REFERENCES reserves(id)
);

CREATE TABLE IF NOT EXISTS reserves (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE availability_promotion_filters;
SET FOREIGN_KEY_CHECKS = 1;