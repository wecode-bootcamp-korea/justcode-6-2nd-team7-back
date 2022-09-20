-- migrate:up
CREATE TABLE room_availability_checks (
  id INT NOT NULL AUTO_INCREMENT,
  date DATETIME,
  room_id INT NOT NULL,
  quantity INT NOT NULL,
  remain INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(room_id) REFERENCES accomodation_rooms(id)
)

-- migrate:down
DROP TABLE room_availability_checks;
