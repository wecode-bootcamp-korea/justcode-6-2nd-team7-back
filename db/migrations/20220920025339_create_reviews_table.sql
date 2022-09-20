-- migrate:up
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  users_id INT NOT NULL,
  accomodation_id INT NOT NULL,
  room_id INT NOT NULL,
  reservation_id INT NOT NULL,
  review varchar(1000) NOT NULL,
  rating INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (id)
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (accomodation_id) REFERENCES accomodations(id),
  FOREIGN KEY (room_id) REFERENCES accomodation_rooms(id),
  FOREIGN KEY (reservation_id) REFERENCES reservations(id)
)

-- migrate:down
DROP TABLE reviews;
