-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS reviews (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  accomodation_id INT NOT NULL,
  room_id INT NOT NULL,
  reservation_id INT,
  comment varchar(1000) NOT NULL,
  rating decimal(3,1) NOT NULL,
  img varchar(1000) NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (accomodation_id) REFERENCES accomodations(id),
  FOREIGN KEY (room_id) REFERENCES accomodation_rooms(id),
  FOREIGN KEY (reservation_id) REFERENCES reservations(id)
);
SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE reviews;
SET FOREIGN_KEY_CHECKS = 1;