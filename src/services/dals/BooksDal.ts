import { rmNewlines } from '../../utils'
import { buildAndWhere } from './utils'

class BooksDal {
  db: KnexDb
  constructor(db: KnexDb) {
    this.db = db
  }

  getBooks = async (params: GetBooksParams): Promise<Book[]> => {
    const query = rmNewlines(`
    SELECT * FROM books
    WHERE id IS NOT NULL
    ${buildAndWhere(params)}
    ORDER BY "createdAt" DESC;
    `)

    return this.db.raw(query).then((r: any) => r.rows)
  }

  createBook = async (input: CreateBookInput): Promise<Book> => {
    return this.db('books')
      .insert(input)
      .returning('*')
      .then((r: Book[]) => r[0]) // return one
  }

  updateBook = ({ id }: IdParams, input: UpdateBookInput): Promise<Book> => {
    return this.db('books')
      .where({ id })
      .update(input)
      .returning('*')
      .then((r: Book[]) => r[0]) // return one
  }

  getBook = async (params: IdParams): Promise<Book> => {
    return this.db('books').select().where(params).first() // return one
  }

  deleteBook = async (params: IdParams): Promise<void> => {
    return this.db('books')
      .del()
      .where(params)
      .then((_r: any) => {
        return
      })
  }
}

export default BooksDal
