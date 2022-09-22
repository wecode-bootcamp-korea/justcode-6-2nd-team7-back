-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO accomodation_categories (name)
VALUE
("모텔"),
("호텔·리조트"),
("펜션"),
("게스트하우스"),
("캠핑·글램핑"),
("한옥")
;


SET FOREIGN_KEY_CHECKS = 1;
-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE accomodation_categories;
SET FOREIGN_KEY_CHECKS = 1;
