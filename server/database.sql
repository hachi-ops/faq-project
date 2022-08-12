CREATE DATABASE faq_database;

CREATE TABLE questions(
    question_id SERIAL PRIMARY KEY,
    question VARCHAR(500)
);