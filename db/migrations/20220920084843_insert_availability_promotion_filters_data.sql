-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO availability_promotion_filters (accomodation_id, reserve_id)
VALUES 

(3, 3),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 3),
(9, 2),
(10, 2)
;

INSERT INTO reserves (name)
VALUES
("대실 예약"),
("숙박 예약"),
("프로모션")
;


SET FOREIGN_KEY_CHECKS = 1;


-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE availability_promotion_filters;
TRUNCATE reserves;

SET FOREIGN_KEY_CHECKS = 1;
