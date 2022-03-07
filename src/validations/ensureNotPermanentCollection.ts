import errors from '../errors'

const { ForbiddenError } = errors

/** Returns a book if it exists, otherwise throws 404 */
const ensureNotPermanentCollection = (book: Book): void => {
  if (book.isPermanentCollection) {
    throw new ForbiddenError(
      `You cannot modify books in the permanent collection! Book with id '${book.id}' is in the permanent collection.`
    )
  }
}

export default ensureNotPermanentCollection
