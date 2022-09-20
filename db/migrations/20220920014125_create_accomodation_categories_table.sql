-- migrate:up
CREATE TABLE accomodation_categories (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id)
);

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE accomodation_categories;
SET FOREIGN_KEY_CHECKS = 1;

