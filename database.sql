-- CREATE DATABASE faq_database;

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE questions(
  id SERIAL,
  user_id UUID,
  question VARCHAR(300) NOT NULL,
  answer VARCHAR(500),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);