-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO room_bed_numbers (room_id, bed_type_id, quantity)
VALUES 
(1, 2, 2),
(2, 2, 1),
(3, 1, 2),
(4, 2, 2),
(5, 2, 1),
(6, 4, 1),
(7, 2, 1),
(8, 2, 1),
(9, 2, 1),
(10, 2, 1),
(11, 3, 1),
(11, 1, 1),
(12, 2, 1),
(13, 2, 2),
(14, 2, 2),
(15, 1, 2),
(16, 3, 1),
(20, 5, 1),
(26, 3, 2)
;

INSERT INTO bed_types (name)
VALUES
("싱글"),
("더블"),
("퀸"),
("킹"),
("온돌")
;

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE room_bed_numbers;
TRUNCATE bed_types;

SET FOREIGN_KEY_CHECKS = 1;
