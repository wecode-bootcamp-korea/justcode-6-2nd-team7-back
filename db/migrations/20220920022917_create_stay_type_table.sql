-- migrate:up
CREATE TABLE stay_types (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(50),
  PRIMARY KEY (id)
);

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE stay_types;
SET FOREIGN_KEY_CHECKS = 1;
