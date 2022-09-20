-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;
CREATE TABLE bed_types (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  room_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(room_id) REFERENCES accomodation_rooms(id)
);
SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE bed_types;
SET FOREIGN_KEY_CHECKS = 1;