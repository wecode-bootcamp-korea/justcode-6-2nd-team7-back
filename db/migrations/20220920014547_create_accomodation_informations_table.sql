-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;
CREATE TABLE accomodation_informations (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  information varchar(1000) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id)
);
SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE accomodation_informations;
SET FOREIGN_KEY_CHECKS = 1;