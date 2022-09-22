-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO hotel_cottage_camping_hanok_filters (accomodation_id, grade_id)
VALUES 
(3, 1),
(4, 2),
(5, 3),
(6, 4),
(9, 7),
(10, 8),
(11, 1),
(12, 11)
;

INSERT INTO grades (name)
VALUES
("5STAR"),
("S1"),
("S"),
("PENSION"),
("POOLVILLA"),
("LUXURY"),
("CAMP"),
("GLAMPING"),
("CARAVAN"),
("HOTEL"),
("OLDHOUSE"),
("HEADHOUSE"),
("GUESTHOUSE");

SET FOREIGN_KEY_CHECKS = 1;


-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE accomodation_images;
TRUNCATE grades;

SET FOREIGN_KEY_CHECKS = 1;
