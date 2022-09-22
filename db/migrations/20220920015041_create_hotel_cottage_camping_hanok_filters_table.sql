-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS hotel_cottage_camping_hanok_filters (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  grade_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id),
  FOREIGN KEY(grade_id) REFERENCES grades(id)
);

CREATE TABLE IF NOT EXISTS grades (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE hotel_cottage_camping_hanok_filters;
SET FOREIGN_KEY_CHECKS = 1;