-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS accomodation_rooms (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  thumbnail_image VARCHAR(200) NOT NULL,
  capacity INT NOT NULL,
  stay_type_id INT NOT NULL,
  original_price INT,
  sale_price INT,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id),
  FOREIGN KEY (stay_type_id) REFERENCES stay_type(id)
);

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE accomodation_rooms;
SET FOREIGN_KEY_CHECKS = 1;