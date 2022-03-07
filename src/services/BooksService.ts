import BooksDal from './dals/BooksDal'

import ensureBookExists from '../validations/ensureBookExists'
import ensureNotPermanentCollection from '../validations/ensureNotPermanentCollection'
import { filterObj } from '../utils'

class BooksService {
  booksDal: BooksDal
  constructor(booksDal: BooksDal) {
    this.booksDal = booksDal
  }

  async getBook({ id }: IdParams): Promise<Book> {
    const book = await ensureBookExists({ id }, this.booksDal)
    return book
  }

  async getBooks(params: GetBooksParams = {}): Promise<Book[]> {
    return this.booksDal.getBooks(params)
  }

  async createBook(input: CreateBookInput): Promise<Book> {
    return this.booksDal.createBook(input)
  }

  async updateBook({ id }: IdParams, input: UpdateBookInput): Promise<Book> {
    const book = await ensureBookExists({ id }, this.booksDal)
    ensureNotPermanentCollection(book)
    const filteredInput = filterObj(input, [
      'title',
      'author',
      'genre',
      'yearPublished',
      'checkedOut'
    ])
    return this.booksDal.updateBook({ id }, filteredInput)
  }
  async deleteBook({ id }: IdParams): Promise<void> {
    const book = await ensureBookExists({ id }, this.booksDal)
    ensureNotPermanentCollection(book)

    return this.booksDal.deleteBook({ id })
  }
}

export default BooksService
