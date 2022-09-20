-- migrate:up
CREATE TABLE reservations (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  phone_number VARCHAR(50) NOT NULL,
  stay_type_id INT NOT NULL,
  check_in DATETIME NOT NULL,
  check_out DATETIME NOT NULL,
  user_id INT NOT NULL,
  accomodation_id INT NOT NULL,
  room_id INT NOT NULL,
  status_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (id)
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (accomodation_id) REFERENCES accomodations(id),
  FOREIGN KEY (room_id) REFERENCES accomodation_rooms(id),
  FOREIGN KEY (status_id) REFERENCES reservation_status(id)
)

-- migrate:down
DROP TABLE reservations;
