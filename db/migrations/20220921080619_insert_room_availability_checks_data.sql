-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO room_availability_checks (date, room_id, quantity, remain)
VALUES 
("2022-09-22", 1, 4, 3),
("2022-09-22", 2, 3, 3),
("2022-09-22", 3, 5, 3),
("2022-09-22", 4, 7, 2),
("2022-09-22", 5, 4, 4),
("2022-09-22", 6, 4, 4)
;


SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE room_availability_checks;


SET FOREIGN_KEY_CHECKS = 1;
