-- migrate:up
CREATE TABLE review_comments (
  id INT NOT NULL AUTO_INCREMENT,
  comment VARCHAR(200) NOT NULL,
  review_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (id)
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (review_id) REFERENCES reviews(id)
)

-- migrate:down
DROP TABLE review_comments;
