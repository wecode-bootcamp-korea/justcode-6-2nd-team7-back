-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS room_pictures (
  id INT NOT NULL AUTO_INCREMENT,
  room_id INT,
  picture_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (room_id) REFERENCES accomodation_rooms(id),
  FOREIGN KEY (picture_id) REFERENCES pictures(id)
);

CREATE TABLE IF NOT EXISTS pictures (
  id INT NOT NULL AUTO_INCREMENT,
  pictures VARCHAR(200),
  PRIMARY KEY (id)
);
SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE room_pictures;
DROP TABLE pictures;
SET FOREIGN_KEY_CHECKS = 1;