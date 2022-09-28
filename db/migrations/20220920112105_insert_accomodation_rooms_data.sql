-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO accomodation_rooms (accomodation_id, name, thumbnail_image, capacity, stay_type_id, original_price, sale_price)
VALUES 
(1, "트리플", "https://unsplash.com/photos/rlwE8f8anOc", 4, 1, 25000, 10000),
(1, "트리플", "https://unsplash.com/photos/rlwE8f8anOc", 4, 2, 95000, 30000),
(1, "인사이드 더블(창문X)", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 25000, 10000),
(1, "인사이드 더블(창문X)", "https://unsplash.com/photos/rlwE8f8anOc", 2, 2, 50000, 25000),
(2, "비즈니스더블 (창문없음)", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 25000, 14000),
(2, "비즈니스더블 (창문없음)", "https://unsplash.com/photos/rlwE8f8anOc", 2, 2, 50000, 32000),
(2, "스탠다드 트윈", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 30000, 15000),
(2, "스탠다드 트윈", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 55000, 10000),
(3, "프티 트윈", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 105000, 10000),
(3, "시그니처 킹", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 204000, 150000),
(4, "디럭스 더블", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 385000, 0),
(4, "[조식 2인] 디럭스 더블", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 440000, 0),
(5, "풀빌라 A", "https://unsplash.com/photos/rlwE8f8anOc", 4, 1, 199000, 0),
(5, "풀빌라 C", "https://unsplash.com/photos/rlwE8f8anOc", 4, 1, 299000, 0),
(6, "핑크룸", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 59000, 0),
(6, "골드룸", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 59000, 0),
(7, "여자도미(8인)", "https://unsplash.com/photos/rlwE8f8anOc", 8, 1, 27900, 0),
(7, "남자도미(8인)", "https://unsplash.com/photos/rlwE8f8anOc", 8, 1, 27900, 0),
(8, "디럭스 더블", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 130000, 55),
(8, "디럭스 트윈", "https://unsplash.com/photos/rlwE8f8anOc", 3, 1, 130000, 45),
(9, "별빛글램핑", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 69000, 0),
(9, "밸리뷰 글램핑", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 79000, 0),
(10, "커플동", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 89000, 0),
(10, "패밀리동", "https://unsplash.com/photos/rlwE8f8anOc", 4, 1, 99000, 0),
(11, "2층 독채", "https://unsplash.com/photos/rlwE8f8anOc", 4, 1, 300000, 0),
(12, "[최저가] 1인실", "https://unsplash.com/photos/rlwE8f8anOc", 1, 1, 160000, 0),
(12, "2인실", "https://unsplash.com/photos/rlwE8f8anOc", 1, 1, 180000, 0)
;

SET FOREIGN_KEY_CHECKS = 1;


-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE accomodation_rooms;

SET FOREIGN_KEY_CHECKS = 1;
