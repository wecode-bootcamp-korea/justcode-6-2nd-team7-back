-- migrate:up
CREATE TABLE availability_promotion_filters (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id)
)

-- migrate:down
DROP TABLE availability_promotion_filters;
