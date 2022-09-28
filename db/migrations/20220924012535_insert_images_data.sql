-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO images (image)
VALUES 
("https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"),
("https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")
;

SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE stay_types;

SET FOREIGN_KEY_CHECKS = 1;