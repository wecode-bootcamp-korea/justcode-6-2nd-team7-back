-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO points (user_id, point, history)
VALUES 
(1, 10000, "홍어 수출 성공 기념"),
(2, 100000, "첫 수확 기념"),
(3, 5000, "출장비"),
(4, 50000, "특별수당"),
(5, 80000, "출장 복귀 기념"),
(5, 5000, "가입기념"),
(5, 5000, "가입기념"),
(5, 5000, "가입기념"),
(5, 5000, "가입기념"),
(5, 5000, "가입기념");

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE users;

SET FOREIGN_KEY_CHECKS = 1;