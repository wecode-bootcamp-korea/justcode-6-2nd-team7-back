-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO reservations (name, phone_number, stay_type_id, check_in, check_out, user_id, accomodation_id, room_id, status_id)
VALUES
("저에요", 123, 2, "2022-09-22", "2022-09-25", 1, 1, 1, 1),
("나에요", 456, 2, "2022-01-22", "2022-01-25", 2, 2, 1, 1),
("저에요", 789, 2, "2022-02-22", "2022-02-25", 3, 3, 1, 1),
("나에요", 124, 2, "2022-03-25", "2022-03-26", 4, 4, 1, 1),
("나에요", 345, 2, "2022-10-22", "2022-10-25", 5, 5, 1, 1),
("저에요", 575, 2, "2022-03-22", "2022-03-25", 6, 3, 1, 1),
("나에요", 168, 2, "2022-09-01", "2022-09-04", 7, 10, 1, 1),
("저에요", 167, 2, "2022-08-22", "2022-08-25", 8, 5, 1, 1),
("나에요", 156, 2, "2022-01-02", "2022-01-03", 9, 8, 1, 1),
("나에요", 168, 2, "2022-11-22", "2022-11-25", 10, 23, 1, 1),
("저에요", 179, 2, "2022-12-15", "2022-12-18", 11, 13, 1, 1),
("저에요", 189, 2, "2022-06-04", "2022-06-05", 12, 11, 1, 1),
("나에요", 190, 2, "2022-03-15", "2022-03-25", 13, 21, 1, 1),
("저에요", 465, 2, "2022-05-12", "2022-05-15", 14, 6, 1, 1),
("나에요", 687, 2, "2022-08-01", "2022-08-05", 15, 43, 1, 1),
("저기요", 645, 2, "2022-12-24", "2022-12-25", 16, 1, 1, 1),
("살려조", 789, 2, "2022-06-25", "2022-06-26", 17, 34, 1, 1),
("하푸음", 464, 2, "2022-07-12", "2022-07-15", 18, 28, 1, 1),
("저기요", 687, 2, "2022-04-01", "2022-04-04", 19, 39, 1, 1),
("사려조", 757, 2, "2022-02-01", "2022-02-05", 20, 32, 1, 1),
("저에요", 678, 2, "2022-01-20", "2022-02-02", 21, 1, 1, 1),
("하아품", 576, 2, "2022-08-12", "2022-08-15", 22, 41, 1, 1),
("살려쥬", 798, 2, "2022-12-01", "2022-12-05", 23, 1, 1, 1),
("아아악", 577, 2, "2022-03-12", "2022-03-15", 24, 1, 1, 1),
("저에요", 188, 2, "2022-06-07", "2022-06-09", 25, 52, 1, 1),
("저에요", 133, 2, "2022-02-01", "2022-02-09", 26, 51, 1, 1),
("나에요", 122, 2, "2022-05-11", "2022-05-14", 27, 1, 1, 1),
("저사람", 144, 2, "2022-11-11", "2022-11-15", 28, 1, 1, 1),
("이상해", 155, 2, "2022-07-02", "2022-07-06", 29, 55, 1, 1),
("저에요", 166, 2, "2022-08-22", "2022-08-23", 30, 1, 1, 1),
("저에요", 178, 2, "2022-09-05", "2022-09-06", 31, 54, 1, 1),
("으아악", 188, 2, "2022-04-02", "2022-04-05", 32, 1, 1, 1),
("제에발", 199, 2, "2022-01-22", "2022-01-28", 33, 1, 1, 1),
("저에요", 200, 2, "2022-03-10", "2022-03-11", 34, 53, 1, 1),
("하이루", 211, 2, "2022-09-01", "2022-09-02", 35, 1, 1, 1),
("저에요", 222, 2, "2022-07-07", "2022-07-08", 36, 44, 1, 1),
("방가방", 223, 2, "2022-07-10", "2022-07-14", 37, 57, 1, 1),
("저에요", 224, 2, "2022-06-02", "2022-06-03", 38, 1, 1, 1),
("저에요", 125, 2, "2022-01-27", "2022-01-28", 39, 61, 1, 1),
("저기요", 126, 2, "2022-02-15", "2022-02-16", 40, 62, 1, 1),
("저에요", 127, 2, "2022-05-10", "2022-05-15", 41, 1, 1, 1),
("이사람", 128, 2, "2022-09-06", "2022-09-10", 42, 1, 1, 1),
("저에요", 129, 2, "2022-11-10", "2022-11-11", 43, 1, 1, 1),
("저사람", 200, 2, "2022-12-01", "2022-12-02", 44, 13, 1, 1),
("저에요", 345, 2, "2022-12-22", "2022-12-25", 45, 1, 1, 1),
("캐빡팅", 145, 2, "2022-01-04", "2022-01-05", 46, 22, 1, 1),
("저에요", 164, 2, "2022-02-09", "2022-02-08", 47, 1, 1, 1),
("살려달", 175, 2, "2022-08-25", "2022-08-26", 48, 23, 1, 1),
("저에요", 686, 2, "2022-10-20", "2022-10-22", 49, 1, 1, 1),
("달나라", 678, 2, "2022-01-28", "2022-02-01", 50, 19, 1, 1),
("별나라", 196, 2, "2022-02-27", "2022-03-01", 51, 1, 1, 1),
("저에요", 645, 2, "2022-04-29", "2022-04-30", 52, 11, 1, 1),
("저에요", 968, 2, "2022-06-24", "2022-06-25", 53, 33, 1, 1),
("저스트", 756, 2, "2022-09-17", "2022-09-25", 54, 34, 1, 1),
("저에요", 342, 2, "2022-10-16", "2022-10-25", 55, 1, 1, 1),
("저에요", 148, 2, "2022-07-23", "2022-07-25", 56, 24, 1, 1),
("후아이", 864, 2, "2022-11-21", "2022-11-25", 57, 23, 1, 1),
("저에요", 136, 2, "2022-07-01", "2022-07-02", 58, 21, 1, 1),
("저에요", 699, 2, "2022-12-22", "2022-12-26", 59, 20, 1, 1),
("저에요", 136, 2, "2022-11-01", "2022-11-02", 60, 53, 1, 1),
("저에요", 792, 2, "2022-03-01", "2022-03-04", 61, 1, 1, 1),
("저에요", 678, 2, "2022-05-05", "2022-05-07", 62, 31, 1, 1),
("코드살", 142, 2, "2022-05-07", "2022-05-08", 63, 56, 1, 1)









;

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE reservations;

SET FOREIGN_KEY_CHECKS = 1;