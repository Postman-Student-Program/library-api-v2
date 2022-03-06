# Postman Library API v2

## Development

### Initialize database

You will need to have [Postgres](https://www.postgresql.org/) installed to run test and development databases.

Once Postgres is install, you should have access to the `psql` command.

Initialize the test and development databases:

`npm run db:init`

`npm run db:dev:pristine`

This will create `library_api_test` and `library_api_dev` databases with a user named
`librarian`, then migrate & seed them by with initial books.

#### Run migrations

`npm run db:dev:pristine` ran the latest migration when you initialize the database. If you need to update migrations later:

`npm run db:dev:latest`

#### Inspecting database

Run `npm run psql` in your terminal to enter the postgres CLI as the default superuser on your machine (hopefully).

You can run SQL queries in the `psql` REPL

Ex:

```sql
SELECT * from "books";
```

_Note1_: SQL keywords are case-insensitive. (`SELECT` = `select`)

_Note2_: table and oclumn names should come in double quotes `""` (you don't actually need if table/column names are a single word, but keep for good practice)

_Note2_: strings must by marked with single quotes `''`. Ex:

```sql
SELECT * FROM "books" WHERE "author" = 'borges';
```

### Install and develop

`npm install`

Start api dev server

`npm run dev`

The API runs on `localhost:4000` by default unless other `PORT` is specified in the environment.

### Updating schema.yaml

`schema.yaml` is the single source of truth used to validate requests and reponses for the API.

**IMPORTANT** Whenever you change `schema.yaml`, run `npm run genJSON` to generate a JSON version of the schema that fastify will use for validation.

If you have changed any routes, be sure to update the locations of the path objects in the server route validations.

### Tests

Tests can be collacated with build files. They will be ignored in the build.
