import { off } from 'process'
import BooksDal from './dals/BooksDal'

class BooksService {
  booksDal: BooksDal
  constructor(booksDal: BooksDal) {
    this.booksDal = booksDal
  }

  async getBooks(params: GetBooksParams = {}): Promise<Book[]> {
    return this.booksDal.getBooks(params)
  }

  async createBook(input: CreateBookInput): Promise<Book> {
    return this.booksDal.createBook(input)
  }
}

export default BooksService
