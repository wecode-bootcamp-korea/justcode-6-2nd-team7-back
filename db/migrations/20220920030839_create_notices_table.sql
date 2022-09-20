-- migrate:up
CREATE TABLE notices (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  content VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY(id)
)

-- migrate:down
DROP TABLE notices;
