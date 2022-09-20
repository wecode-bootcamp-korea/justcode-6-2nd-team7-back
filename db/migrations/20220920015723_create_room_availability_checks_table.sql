-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;
CREATE TABLE room_availability_checks (
  id INT NOT NULL AUTO_INCREMENT,
  date DATETIME,
  room_id INT NOT NULL,
  quantity INT NOT NULL,
  remain INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(room_id) REFERENCES accomodation_rooms(id)
);
SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE room_availability_checks;
SET FOREIGN_KEY_CHECKS = 1;