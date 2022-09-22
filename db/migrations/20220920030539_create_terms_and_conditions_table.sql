-- migrate:up
CREATE TABLE IF NOT EXISTS terms_and_conditions (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  content VARCHAR(50) NOT NULL,
  effective_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE terms_and_conditions;
SET FOREIGN_KEY_CHECKS = 1;
