-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO accomodation_images (accomodation_id, image_id)
VALUES 
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1)
;

INSERT INTO images (image)
VALUES
("https://unsplash.com/photos/rlwE8f8anOc");

SET FOREIGN_KEY_CHECKS = 1;


-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE accomodation_images;
TRUNCATE images;

SET FOREIGN_KEY_CHECKS = 1;
