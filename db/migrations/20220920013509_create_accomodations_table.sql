-- migrate:up
CREATE TABLE accomodations (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  address VARCHAR (200) NOT NULL,
  thumbnail_image VARCHAR(200) NOT NULL,
  category_id INT,
  location_id INT,
  facilities_id INT,
  latitude DECIMAL(20,8),
  longitude DECIMAL(20,8),
  PRIMARY KEY(id)
  FOREIGN KEY (category_id) REFERENCES accomodation_categories(id),
  FOREIGN KEY (location_id) REFERENCES accomodation_locations(id),
  FOREIGN KEY (facilities_id) REFERENCES accomodation_facilities(id)
)

-- migrate:down
DROP TABLE accomodations;
