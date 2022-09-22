-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO accomodation_locations (name)
VALUE
("서울")
;


SET FOREIGN_KEY_CHECKS = 1;
-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE accomodation_locations;
SET FOREIGN_KEY_CHECKS = 1;