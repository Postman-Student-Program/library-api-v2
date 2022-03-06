# Postman Library API v2

## Development

### Prereqs

You will need to have [Postgres](https://www.postgresql.org/) installed to run test and development databases.

Once Postgres is install, you should have access to the `psql` command.

### Initialize database

Run

`npm run db:init`

`npm run db:dev:pristine`

This will create `library_api_test` and `library_api_dev` databases with a user named
`librarian`, then migrate & seed them with initial books.

#### Run migrations

When you initialized the database you ran `npm run db:dev:pristine`, which ran the latest migration.

If you need to update migrations later:

`npm run db:dev:latest`

#### Inspecting database

If you want to poke around the dev database or run SQL commands on it directly, run `npm run psql` in your terminal. This will enter you in the postgres CLI as the default superuser on your machine (hopefully).

You can run SQL queries in the `psql` REPL

Ex:

```sql
SELECT * from "books";
```

_Notes_

- SQL keywords are case-insensitive. (`SELECT` = `select`)

- table and column names should come in **double quotes** `""`. You don't actually need quotes if the table/column name is a single lowercase word, but just do it for good practice.

- strings must by marked with **single quotes** `''`. Ex:

```sql
SELECT * FROM "books" WHERE "author" = 'borges';
```

### Install and develop

`npm install`

Start api dev server

`npm run dev`

The API runs on `localhost:4000` by default unless other `PORT` is specified in the environment.

### Testing

Tests can be collacated with build files. They will be ignored in the build.

Run `npm test` to start test runner. It will listen for file updates. Note that the test database is destoryed and re-migrated and seeded each run of `npm test`
