import config from '../config'

const knexConfig: { [key: string]: any } = {
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
    connection: 'postgres://localhost:5432/library_api_dev'
  },
  production: {
    client: 'postgresql',
    connection: config.prodDbConnectionUrl,
    pool: {
      min: 2,
      max: 10,
      afterCreate: (conn: any, done: any) => {
        done(null, conn)
      }
    }
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
}

export default knexConfig
