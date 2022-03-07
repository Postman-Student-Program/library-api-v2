import errors from '../errors'
import BooksDal from '../services/dals/BooksDal'

const { NotFoundError } = errors

/** Returns a book if it exists, otherwise throws 404 */
const ensureBookExists = async (
  { id }: IdParams,
  booksDal: BooksDal
): Promise<Book> => {
  const book = await booksDal.getBook({ id })
  if (!book) {
    throw new NotFoundError(`Book with id '${id} not found`)
  }
  return book
}

export default ensureBookExists
