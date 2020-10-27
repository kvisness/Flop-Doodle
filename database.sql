
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(100) UNIQUE NOT NULL,
    "gender" VARCHAR(1000) NOT NULL,
    "age" INTEGER NOT NULL DEFAULT 0,
    "password" VARCHAR (1000) NOT NULL
);

