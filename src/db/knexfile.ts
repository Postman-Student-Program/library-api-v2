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
    acquireConnectionTimeout: 20000,
    pool: {
      min: 0,
      max: 10
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
