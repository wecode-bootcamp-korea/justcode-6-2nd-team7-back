-- migrate:up
CREATE TABLE review_images (
  id INT NOT NULL AUTO_INCREMENT,
  image VARCHAR(1000),
  review_id INT NOT NULL,
  PRIMARY KEY (id)
  FOREIGN KEY (review_id) REFERENCES reviews(id)
)

-- migrate:down
DROP TABLE review_images;
