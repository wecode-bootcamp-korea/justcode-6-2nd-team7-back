-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO room_pictures (room_id, picture_id)
VALUES 
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10)
;

INSERT INTO pictures (pictures)
VALUES
("https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1631049035634-c04c637651b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1631049035326-57414e7739eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1557127275-f8b5ba93e24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60")
;

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE room_pictures;
TRUNCATE pictures;

SET FOREIGN_KEY_CHECKS = 1;