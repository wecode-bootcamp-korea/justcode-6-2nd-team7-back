-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS accomodation_facilities (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  facility_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (accomodation_id) REFERENCES accomodations(id),
  FOREIGN KEY (facility_id) REFERENCES facilities(id)
);
SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE accomodation_facilities;
SET FOREIGN_KEY_CHECKS = 1;