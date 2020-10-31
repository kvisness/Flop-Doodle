
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

DROP TABLE "user";

CREATE TABLE "words"
(
    "id" SERIAL PRIMARY KEY,
    "sight_word" VARCHAR (100) UNIQUE NOT NULL,
    "audio" VARCHAR (255)
);

DROP TABLE "words";

INSERT INTO "words" ("sight_word", "audio") VALUES ('mom', '/hi.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('dad', '/dad.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('cat', '/flop.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('dog', '/dog.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('get', '/get.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('wow', '/wow.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('has', '/has.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('rug', '/rug.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('sun', '/sun.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('bug', '/bug.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('kris', '/kris.m4a');
INSERT INTO "words" ("sight_word", "audio") VALUES ('angela', '/angela.m4a');

CREATE TABLE "games"
(
    "id" SERIAL PRIMARY KEY,
    "game_type" VARCHAR (20) UNIQUE NOT NULL
    --"word_type" VARCHAR (20) UNIQUE NOT NULL
);
INSERT INTO "games" ("game_type") VALUES ('2-letter-Words');
INSERT INTO "games" ("game_type") VALUES ('3-letter-Words');
INSERT INTO "games" ("game_type") VALUES ('4-letter-Words');
INSERT INTO "games" ("game_type") VALUES ('5-letter-Words');
INSERT INTO "games" ("game_type") VALUES ('6-letter-Words');
INSERT INTO "games" ("game_type") VALUES ('7-letter-Words');

DROP TABLE "games";

SELECT * FROM "games";
DELETE FROM "words" WHERE "id" = 3;

--this code works
--SELECT *
--FROM "words"
--WHERE length(sight_word)=3
--ORDER BY RANDOM () LIMIT 15;

--CREATE TABLE "scores" (
--	"id" SERIAL PRIMARY KEY,
--	"two_letter" INT,
--	"three_letter" INT, 
--	"four_letter" INT, 
--	"five_letter" INT,
--	"six_letter" INT
--);

--DROP TABLE "words";
