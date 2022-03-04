# Postman Library API v2

## Development

### Initialize database

You will need to have [Postgres](https://www.postgresql.org/) installed to run test and development databases.

Once Postgres is install, you should have access to the `psql` command.

Initialize the test and development databases by running

`npm run db:init`

This will create `library_api_test` and `library_api_dev` databases with a user named
`librarian`

#### Run migrations

Run migrations and seeds on the dev database with:

`npm run db:dev:pristine`

You can run this command anytime you want to reset the dev database.

#### Inspecting database

Run `npm run psql` in your terminal to enter the postgres CLI as the default superuser on your machine (hopefully).

Use these commands in the `psql` REPL to explore

**View all dbs**

Use `\l`

**View all Postgres users**

Use `\du`

**Connect to a db**

Use `\c <db_name>`

ex: `\c library_api_dev`

**View tables in db**

After connecting to a db with `\c <db_name>`, run `\dt` to list all tables

**Explore table content**

After connecting to a db with `\c <db_name>`, you can run SQL queries.

Ex: `SELECT * from "books";`

_Note1_: SQL keywords are case-insensitive. (`SELECT` = `select`)

_Note2_: table and oclumn names should come in double quotes `""` (you don't actually need if table/column names are a single word, but keep for good practice)

_Note2_: strings must by marked with single quotes `''`. (Ex: `SELECT \* FROM "books" WHERE "author" = 'borges'`)

### Install and develop

`npm install`

Start api dev server

`npm run dev`

The API runs on `localhost:4000` by default unless other `PORT` is specified in the environment.

## Updating schema.yaml

`schema.yaml` is the single source of truth used to validate requests and reponses for the API.

**IMPORTANT** Whenever you change `schema.yaml`, run `npm run genJSON` to generate a JSON version of the schema that fastify will use for validation.

If you have changed any routes, be sure to update the locations of the path objects in the server route validations.
