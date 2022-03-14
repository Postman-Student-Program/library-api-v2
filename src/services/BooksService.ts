import BooksDal from './dals/BooksDal'

import ensureBookExists from '../validations/ensureBookExists'
import ensureNotPermanentCollection from '../validations/ensureNotPermanentCollection'
import { filterObj } from '../utils'

class BooksService {
  booksDal: BooksDal
  constructor(booksDal: BooksDal) {
    this.booksDal = booksDal
  }

  getBook = async ({ id }: IdParams): Promise<Book> => {
    const book = await ensureBookExists({ id }, this.booksDal)
    return book
  }

  getBooks = async (params: GetBooksParams = {}): Promise<Book[]> => {
    return this.booksDal.getBooks(params)
  }

  createBook = async (input: CreateBookInput): Promise<Book> => {
    const filteredInput = filterObj(input, [
      'title',
      'author',
      'genre',
      'yearPublished'
    ])
    return this.booksDal.createBook(filteredInput)
  }

  updateBook = async (
    { id }: IdParams,
    input: UpdateBookInput
  ): Promise<Book> => {
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

  deleteBook = async ({ id }: IdParams): Promise<void> => {
    const book = await ensureBookExists({ id }, this.booksDal)
    ensureNotPermanentCollection(book)

    return this.booksDal.deleteBook({ id })
  }
}

export default BooksService
