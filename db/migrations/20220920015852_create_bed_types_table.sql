-- migrate:up
CREATE TABLE bed_types (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  room_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(room_id) REFERENCES accomodation_rooms(id)
)

-- migrate:down
DROP TABLE bed_types;
