-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS accomodation_images (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  image_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id),
  FOREIGN KEY(image_id) REFERENCES images(id)
);

CREATE TABLE IF NOT EXISTS images (
  id INT NOT NULL AUTO_INCREMENT,
  image VARCHAR(1000),
  PRIMARY KEY(id)
);

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE accomodation_images;
SET FOREIGN_KEY_CHECKS = 1;