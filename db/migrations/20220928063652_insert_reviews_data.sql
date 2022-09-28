-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO reviews (user_id, accomodation_id, room_id, reservation_id, comment, rating, img)
VALUES 
(1, 1, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 2, 1, 2, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 3, 1, 3, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 4, 1, 4, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 5, 1, 5, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 6, 1, 6, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 7, 1, 7, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 8, 1, 8, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 9, 1, 9, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 10, 1, 10, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 11, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 12, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 13, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 14, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 15, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 16, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 17, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 18, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 19, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 20, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 21, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 22, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 23, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 24, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 25, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 26, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 27, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 28, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 29, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 30, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 31, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 32, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 33, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 34, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 35, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 36, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 37, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 38, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 39, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 40, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 41, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 42, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 43, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 44, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 45, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 46, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 47, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 48, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 49, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 50, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 51, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 52, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 53, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 54, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 55, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 56, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 57, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 58, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 59, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 60, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 61, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 62, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 63, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
(1, 64, 1, 1, "좋아요", 10, "https://images.pexels.com/photos/1187520/pexels-photo-1187520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")









;


SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE reviews;


SET FOREIGN_KEY_CHECKS = 1;
