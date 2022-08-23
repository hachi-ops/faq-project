-- CREATE DATABASE faq_database;

CREATE TABLE questions(
  id BIGSERIAL PRIMARY KEY,
  question VARCHAR(300),
  answer VARCHAR(500)
);