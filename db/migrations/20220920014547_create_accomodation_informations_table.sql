-- migrate:up
CREATE TABLE accomodation_informations (
  id INT NOT NULL AUTO_INCREMENT,
  accomodation_id INT NOT NULL,
  information varchar(1000) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(accomodation_id) REFERENCES accomodations(id)
)

-- migrate:down
DROP TABLE accomodation_informations;
