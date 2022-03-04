import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('books', function (table) {
    table
      .uuid('id')
      .notNullable()
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .unique()
    table.string('title').notNullable()
    table.string('author').notNullable()
    table.string('genre').notNullable()
    table.integer('yearPublished').notNullable()
    table.boolean('checkedOut').notNullable().defaultTo(false)
    table.boolean('isPermanentCollection').notNullable().defaultTo(false)
    table.timestamp('createdAt').defaultTo(knex.fn.now())

    table.primary(['id'])
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('books')
}
