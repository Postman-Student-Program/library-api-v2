# Postman Library API v2

## Development

You will need `Docker` and `docker-compose` ([install](https://docs.docker.com/compose/install/)) in order to use the test and development databases.

`npm install`

`npm run dev`

## Updating schema.yaml

`schema.yaml` is the single source of truth used to validate requests and reponses for the API.

**IMPORTANT** Whenever you change `schema.yaml`, run `npm run genJSON` to generate a JSON version of the schema that fastify will use for validation.

If you have changed any routes, be sure to update the locations of the path objects in the server route validations.
