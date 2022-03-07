import { rmNewlines } from '../../utils'
import { buildAndWhere } from './utils'

class BooksDal {
  db: KnexDb
  constructor(db: KnexDb) {
    this.db = db
  }

  async getBooks(params: GetBooksParams): Promise<Book[]> {
    const query = rmNewlines(`
    SELECT * FROM books
    WHERE id IS NOT NULL
    ${buildAndWhere(params)}
    ORDER BY "createdAt" DESC;
    `)

    return this.db.raw(query).then((r: any) => r.rows)
  }

  async createBook(input: CreateBookInput): Promise<Book> {
    return this.db('books')
      .insert(input)
      .returning('*')
      .then((r: Book[]) => r[0]) // return one
  }

  async updateBook({ id }: IdParams, input: UpdateBookInput): Promise<Book> {
    console.log({ dalInput: input })
    return this.db('books')
      .where({ id })
      .update(input)
      .returning('*')
      .then((r: Book[]) => r[0]) // return one
  }

  async getBook(params: IdParams): Promise<Book> {
    return this.db('books').select().where(params).first() // return one
  }

  async deleteBook(params: IdParams): Promise<void> {
    return this.db('books')
      .del()
      .where(params)
      .then((_r: any) => {
        return
      })
  }
}

export default BooksDal
