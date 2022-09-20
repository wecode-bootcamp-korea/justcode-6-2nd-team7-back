-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;
CREATE TABLE availability_promotion_filters (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id)
);
SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE availability_promotion_filters;
SET FOREIGN_KEY_CHECKS = 1;