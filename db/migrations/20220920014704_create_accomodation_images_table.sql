-- migrate:up
CREATE TABLE accomodation_images (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  image varchar(1000) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id)
)

-- migrate:down
DROP TABLE accomodation_images;
