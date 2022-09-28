-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;
CREATE TABLE IF NOT EXISTS accomodations (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  address VARCHAR (200) NOT NULL,
  thumbnail_image VARCHAR(200) NOT NULL,
  category_id INT,
  location_id INT,
  latitude DECIMAL(30,6),
  longitude DECIMAL(30,6),
  ceo VARCHAR(1000),
  event VARCHAR(1000),
  PRIMARY KEY(id),
  FOREIGN KEY (category_id) REFERENCES accomodation_categories(id),
  FOREIGN KEY (location_id) REFERENCES accomodation_locations(id)
);
SET FOREIGN_KEY_CHECKS = 1;



-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE accomodations;
SET FOREIGN_KEY_CHECKS = 1;


