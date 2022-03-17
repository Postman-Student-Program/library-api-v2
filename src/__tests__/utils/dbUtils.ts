import db from '../../db/knex'

// User added books have isPermanentCollection: false property
export const delAllUserAddedBooks = async () => {
  await db('books').del().where({ isPermanentCollection: false })
}

export const updateBook = async (
  bookId: string,
  inputs: { [key: string]: any }
) => {
  await db('books').where({ id: bookId }).update(inputs, '*')
}
