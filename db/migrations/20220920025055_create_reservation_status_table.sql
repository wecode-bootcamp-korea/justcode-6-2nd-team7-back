-- migrate:up
CREATE TABLE reservation_status(
  id INT NOT NULL AUTO_INCREMENT,
  status VARCHAR(50),
  PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE reservation_status;
