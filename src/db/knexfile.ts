const config: { [key: string]: any } = {
  test: {
    client: 'postgresql',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    connection: 'postgres://localhost:5432/library_api_test'
  },
  development: {
    client: 'postgresql',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    // TOOD: create local dev db
    connection: 'postgres://localhost:5432/library_api_dev'
  }
  //   production: {
  //     client: 'postgresql',
  //     connection: process.env.DATABASE_URL,
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: 'knex_migrations'
  //     }
  //   }
}

export default config
