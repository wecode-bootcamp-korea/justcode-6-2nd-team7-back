-- migrate:up
CREATE TABLE stay_types (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(50),
  PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE stay_types
