-- migrate:up
CREATE TABLE hotel_cottage_camping_hanok_filters (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id)
)


-- migrate:down
DROP TABLE hotel_cottage_camping_hanok_filters;
