CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  surname VARCHAR(255),
  gender VARCHAR(1),
  date_of_birth DATE,
  telephone_number VARCHAR(20),
  email VARCHAR(255),
  city VARCHAR(100)
);