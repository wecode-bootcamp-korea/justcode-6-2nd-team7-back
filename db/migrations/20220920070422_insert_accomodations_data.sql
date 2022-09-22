-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO accomodations 
(name, address, thumbnail_image, category_id, location_id, latitude, longitude)
VALUES 
("명동 뉴서울호텔", "서울 중구 태평로1가 29-1", "https://unsplash.com/photos/rlwE8f8anOc", 1, 1, 	37.568122816532, 126.9781356609),
("명동 밀리오레호텔", "서울 중구 충무로1가 24-1", "https://unsplash.com/photos/rlwE8f8anOc", 1, 1, 37.56051806261432, 126.9839169759301),
("호텔 크레센도 서울", "서울 강남구 삼성동 113-5", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 37.51080614318017, 127.04690502488441),
("AC 호텔 바이 메리어트 서울 강남", "서울 강남구 역삼동 642", "https://unsplash.com/photos/rlwE8f8anOc", 2, 1, 37.501223430103266, 127.0354881016128),
("양평 풀빌라마노아", "경기 양평군 서종면 정배리 22", "https://unsplash.com/photos/rlwE8f8anOc", 3, 1, 37.596231815704506, 127.43090946044171),
("양평 스마일카라반펜션", "경기 양평군 단월면 석산리 147-1", "https://unsplash.com/photos/rlwE8f8anOc", 3, 1, 37.646373808797925, 127.61613781037538),
("홍대 롬바드 게스트하우스", "서울특별시 마포구 서교동 466-6 4F", "https://unsplash.com/photos/rlwE8f8anOc", 4, 1, 37.554240755925434, 126.91585131354414),
("홍대 다우하우스 2호점", "서울특별시 마포구 동교동 176-18 3,4층", "https://unsplash.com/photos/rlwE8f8anOc", 4, 1, 37.5573346137052, 126.92785016904726),
("포천 파인트리글램핑&풀빌라", "경기 포천시 이동면 연곡리 932", "https://unsplash.com/photos/rlwE8f8anOc", 5, 1, 38.0207204737, 127.36417571769874),
("가평 캡틴카라반&글램핑", "경기 가평군 상면 임초리 493-1", "https://unsplash.com/photos/rlwE8f8anOc", 5, 1, 37.74907005997246, 127.35918104263651),
("은평 한옥마을 채효당", "서울특별시 은평구 진관동 211-10 은평한옥마을 채효당", "https://unsplash.com/photos/rlwE8f8anOc", 6, 1, 37.64316064003755, 126.93973804918845),
("북촌 한옥 소현당", "서울 종로구 소격동 157-1", "https://unsplash.com/photos/rlwE8f8anOc", 6, 1, 37.578929586159475, 126.98172808496055)
;

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE accomodations;

SET FOREIGN_KEY_CHECKS = 1;
