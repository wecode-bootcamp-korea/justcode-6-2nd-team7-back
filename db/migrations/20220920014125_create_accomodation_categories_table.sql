-- migrate:up
CREATE TABLE accomodation_categories (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id)
)

-- migrate:down
DROP TABLE accomodation_categories;
