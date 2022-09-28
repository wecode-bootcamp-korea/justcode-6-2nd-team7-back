-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO stay_types (name)
VALUES 
("대실"),
("숙박")
;

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE stay_types;

SET FOREIGN_KEY_CHECKS = 1;
