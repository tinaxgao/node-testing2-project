# Server Testing Module Project

## Instructions

### Minimum Viable Product

For this project you will create a RESTful API using Node and Express, containing endpoints to perform some CRUD operations on a resource of your choosing. Two or three endpoints are enough. Data should be persisted in a SQLite database.

## Requirements

- Write a minimum of ten tests using supertest. a

## Checklist

Here is a checklist of tasks to help you put your project together:

- x Generate a `.gitignore` file.
- x Install express, knex, sqlite3 as plain dependencies.
- x Install jest, eslint, nodemon, supertest, cross-env as dev-dependencies.
- x Configure jest and eslint using `npx <libname> --init`.
- x Create a `knexfile.js` with "development" and "testing" configurations.
- x Create a `db-config.js` file that selects the correct configuration using the value of `process.env.NODE_ENV`.
- x Create migration and seed files.
- x Put together "start", "server", "rollback", "migrate" and "seed" scripts in your `package.json`.
- x Create a "test" script in your `package.json` using cross-env to inject a `NODE_ENV` of "testing".
- Create a basic express application with a few database access functions and a few endpoints.
- Test your endpoints manually using Postman, HTTPie or similar.
- Test your endpoints with supertest.
