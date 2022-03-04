import { Knex } from 'knex'
import books from '../fixtures/books'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('books').del()

  await knex('books').insert(books)
}
