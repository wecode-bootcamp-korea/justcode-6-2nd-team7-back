-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO availability_promotion_filters (accomodation_id, reserve_id)
VALUES 
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 3),
(9, 2),
(10, 2),
(11, 2),
(12, 2),
(13, 2),
(14, 2),
(15, 2),
(16, 2),
(17, 2),
(18, 2),
(19, 3),
(20, 2),
(21, 2),
(22, 2),
(23, 2),
(24, 2),
(25, 2),
(26, 2),
(27, 2),
(28, 3),
(29, 2),
(30, 2),
(31, 2),
(32, 2),
(33, 2),
(34, 2),
(35, 2),
(36, 2),
(37, 3),
(38, 2),
(39, 2),
(40, 2),
(41, 2),
(42, 2),
(43, 3),
(44, 2),
(45, 2),
(46, 2),
(47, 2),
(48, 2),
(49, 2),
(50, 2),
(51, 3),
(52, 2),
(53, 2),
(54, 2),
(55, 2),
(56, 2),
(57, 2),
(58, 2),
(59, 3),
(60, 2),
(61, 2),
(62, 2),
(63, 2)

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
