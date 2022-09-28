-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO reservations (name, phone_number, stay_type_id, check_in, check_out, user_id, accomodation_id, room_id, status_id)
VALUES 
("저에요", 123, 2, 2022-09-22, 2022-09-25, 1, 1, 1, 1),
("저에요", 123, 2, 2022-09-22, 2022-09-25, 2, 1, 1, 1),

;

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE reservations;

SET FOREIGN_KEY_CHECKS = 1;