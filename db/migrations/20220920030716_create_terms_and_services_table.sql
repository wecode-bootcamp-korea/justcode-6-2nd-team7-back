-- migrate:up
CREATE TABLE terms_and_services (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  content VARCHAR(50) NOT NULL,
  effective_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY(id)
)

-- migrate:down
DROP TABLE terms_and_services;
