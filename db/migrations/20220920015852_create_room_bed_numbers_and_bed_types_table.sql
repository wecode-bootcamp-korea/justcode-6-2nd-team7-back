-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS room_bed_numbers (
  id INT NOT NULL AUTO_INCREMENT,
  room_id INT NOT NULL,
  bed_type_id INT,
  quantity INT,
  PRIMARY KEY (id),
  FOREIGN KEY(room_id) REFERENCES accomodation_rooms(id),
  FOREIGN KEY (bed_type_id) REFERENCES bed_types(id)
);

CREATE TABLE IF NOT EXISTS bed_types (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id)
);

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE room_bed_numbers;
DROP TABLE bed_types;
SET FOREIGN_KEY_CHECKS = 1;