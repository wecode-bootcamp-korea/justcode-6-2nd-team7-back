-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO users (email, password, nickname, name, phone_number, kakao_id)
VALUES 
("test1@coding.com", "$2a$10$GqYfpJ3JL4GiVQ7fOTDV2Odtz7ECliXZdk4J5XdN1S7itYBqWqxZK", "강인구", "하정우", "01022020909", "0"),
("test2@coding.com", "$2a$10$rKNmrFuQqoZjCkc62XFutuKGOxdqKjDJa.aOKDlXTgWJdCUtNvyAq", "전요환", "황정민", "01022020909", "0"),
("test3@coding.com", "$2a$10$eFQ0QnibCO2kKOt7ZYMSLeFWcpUTFG5pgq6gP0AwULgDkhziPke/m", "최창호", "박해수", "01022020909", "0"),
("test4@coding.com", "$2a$10$i9JKn.dD.i58hTnQAW4FXek29wbSe1t3.wn3Sj4PUxb38cEVIv4Dy", "변기태", "조우진", "01022020909", "0"),
("test5@coding.com", "$2a$10$fYJMWumEIJ2JokmNt5U0xOP4dxsfcO1Qul0bjGzbiexoDqnJeJekG", "데이빗", "유연석", "01022020909", "0");

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE users;

SET FOREIGN_KEY_CHECKS = 1;
