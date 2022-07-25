
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "gear" (
"id" SERIAL PRIMARY KEY,
"title" VARCHAR (80) NOT NULL,
"review" VARCHAR (1000) NOT NULL,
"year" VARCHAR(10),
"image"VARCHAR(1000),
"user_id" INTEGER REFERENCES "user",
"type_id" VARCHAR(25)
);