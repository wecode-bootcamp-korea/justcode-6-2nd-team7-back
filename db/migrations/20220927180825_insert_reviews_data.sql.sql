-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO reviews (user_id, accomodation_id, room_id, comment, rating, img)
VALUES 
(1, 1, 1, "친구랑 왔어요! 잠을 푹 자서 일 잘 마무리 할 것 같아요.", 9, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(2, 1, 2, "형제님처럼 대해주셨습니다.", 8, "https://images.pexels.com/photos/8078424/pexels-photo-8078424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(3, 1, 3, "해외출장 오래 다녀와서 호캉스 하러 왔습니다. 좋습니다", 10, "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(4, 1, 4, "새직장에서 첫 출장으로 방문했습니다. 좋습니다", 8, "https://images.pexels.com/photos/5371575/pexels-photo-5371575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(5, 1, 4, "좋네요. 뭐ㅎㅎㅎ", 7, "https://images.pexels.com/photos/12758565/pexels-photo-12758565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 2, 5, "진짜 너무너무 깨끗햇고 비즈니스 호텔 미만일줄 알았는데 이상이었어요! 다음에 재방문의사 더 있구 주차나 시설이나 너무 괜찮았어요~~ ", 10, "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(2, 2, 6, "금연실인 줄 모르고 예약해서 조금 불편했지만 친절하게 응대해주셔서 감사했습니다.", 9, "https://images.pexels.com/photos/5142370/pexels-photo-5142370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(3, 2, 7, "청소 깔끔하고 정리정돈 확실합니다. 부담없이 이용할수 있어 행복합니다", 10, "https://images.pexels.com/photos/5331118/pexels-photo-5331118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(4, 2, 7, "남산뷰라 좋았음 딱 필요한 어메니티만 구비되어 있음", 5, "https://images.pexels.com/photos/271672/pexels-photo-271672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(5, 2, 8, "오래된 곳이지만 명동역과 가까워서 편리하고 객실은 아담하고 나름 깔끔해요. 에어컨을 직접 컨트롤 할수 없는 단점만 감안한다면 이용할만한 곳입니다. ", 8, "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE users;

SET FOREIGN_KEY_CHECKS = 1;
