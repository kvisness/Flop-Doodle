
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "words"(
    "id" SERIAL PRIMARY KEY,
    "sight_word" VARCHAR (100) UNIQUE NOT NULL,
    "audio" VARCHAR (255)
);

INSERT INTO "words" ("sight_word", "audio") VALUES ('mom', 'hi.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('dad', 'dad.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('cat', 'flop.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('dog', 'dog.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('get', 'get.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('wow', 'wow.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('has', 'has.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('rug', 'rug.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('sun', 'sun.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('bug', 'bug.m4a');

--SELECT * FROM "words" WHERE length(sight_word)=3 ORDER BY RANDOM() LIMIT 10;