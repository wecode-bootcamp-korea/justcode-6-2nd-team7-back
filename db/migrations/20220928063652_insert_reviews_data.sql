-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO room_availability_checks (date, room_id, quantity, remain, availability)
VALUES 

;


SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE room_availability_checks;


SET FOREIGN_KEY_CHECKS = 1;
