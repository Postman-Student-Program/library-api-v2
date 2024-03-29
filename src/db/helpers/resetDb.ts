import knex from '../knex'

/** Used when resetting database */

const resetDb = async () => {
  const { current_database: currentDb } = (
    await knex.raw('SELECT current_database()')
  ).rows[0]
  console.log(
    `Dropping data in database '${currentDb}' and clearing migration history...`
  )

  // delete migrations history
  await knex.schema.dropTableIfExists('knex_migrations')
  await knex.schema.dropTableIfExists('knex_migrations_lock')

  // drop books table
  await knex.schema.dropTableIfExists('books')

  process.exit(0)
}

resetDb()
