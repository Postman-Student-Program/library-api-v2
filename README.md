# Postman Library API v2

## Development

### Prereqs

You will need to have [Postgres](https://www.postgresql.org/) installed to run test and development databases.

Once Postgres is install, you should have access to the `psql` command.

### Initialize database

Initialize the test and development databases:

`npm run db:init`

`npm run db:dev:pristine`

This will create `library_api_test` and `library_api_dev` databases with a user named
`librarian`, then migrate & seed them by with initial books.

#### Run migrations

When you initialized the database you ran `npm run db:dev:pristine`, which ran the latest migration.

If you need to update migrations later:

`npm run db:dev:latest`

#### Inspecting database

Run `npm run psql` in your terminal to enter the postgres CLI as the default superuser on your machine (hopefully).

You can run SQL queries in the `psql` REPL

Ex:

```sql
SELECT * from "books";
```

_Note1_: SQL keywords are case-insensitive. (`SELECT` = `select`)

_Note2_: table and column names should come in double quotes `""` (you don't actually need if table/column names are a single lowercase word, but keep for good practice)

_Note2_: strings must by marked with single quotes `''`. Ex:

```sql
SELECT * FROM "books" WHERE "author" = 'borges';
```

### Install and develop

`npm install`

Start api dev server

`npm run dev`

The API runs on `localhost:4000` by default unless other `PORT` is specified in the environment.

### Tests

Tests can be collacated with build files. They will be ignored in the build.
