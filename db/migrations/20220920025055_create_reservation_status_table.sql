-- migrate:up
CREATE TABLE IF NOT EXISTS reservation_status(
  id INT NOT NULL AUTO_INCREMENT,
  status VARCHAR(50),
  PRIMARY KEY (id)
);

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE reservation_status;
SET FOREIGN_KEY_CHECKS = 1;