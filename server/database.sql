CREATE DATABASE faq_database;

CREATE TABLE questions(
    questions_id SERIAL PRIMARY KEY,
    question VARCHAR(500)
);