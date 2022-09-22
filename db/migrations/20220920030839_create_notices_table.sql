-- migrate:up
CREATE TABLE IF NOT EXISTS notices (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  content VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY(id)
);

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE notices;
SET FOREIGN_KEY_CHECKS = 1;