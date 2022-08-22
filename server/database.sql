-- CREATE DATABASE faq;


-- CREATE TABLE questions (
-- 	id BIGSERIAL NOT NULL PRIMARY KEY,
-- 	question_text VARCHAR(300) NOT NULL
-- );

-- create table answers (
-- 	id BIGSERIAL NOT NULL PRIMARY KEY,
--   answer_text VARCHAR(500),
--   question_id BIGINT REFERENCES questions (id),
-- 	UNIQUE(question_id)
-- );



--   INSERT INTO questions (question_text)
--   VALUES ('Who am I?'), ('what time is the dinner?');

--   INSERT INTO questions (question_text)
--   VALUES ('What is the time?');

--   INSERT INTO answers (answer_text)
--   VALUES ('You are a human'), ('6.30');

--   UPDATE answers SET question_id = 2 WHERE id = 2;
--   -- UPDATE answers SET question_id = 1 WHERE id = 3; //updated to null answer
--   -- UPDATE answers SET question_id = 3 WHERE id = 1; //gives random answer


-- --//get all questions with answers
--   -- SELECT * FROM questions JOIN answers ON questions.id = question_id; //might be wrong
--   SELECT * FROM questions JOIN answers ON questions.id = answers.id; --probably the right one
--   SELECT * FROM answers JOIN questions ON questions.id = answers.id;
--   --//get all unanswered questions;


CREATE TABLE questions(
  id BIGSERIAL PRIMARY KEY,
  question VARCHAR(300),
  answer VARCHAR(500)
);