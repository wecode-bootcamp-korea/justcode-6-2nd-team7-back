-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;
CREATE TABLE review_images (
  id INT NOT NULL AUTO_INCREMENT,
  image VARCHAR(1000),
  review_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (review_id) REFERENCES reviews(id)
);
SET FOREIGN_KEY_CHECKS = 1;

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE review_images;
SET FOREIGN_KEY_CHECKS = 1;