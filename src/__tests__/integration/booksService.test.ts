import context from '../../buildContext'
import fixtures from '../fixtures'
import booksSeeds from '../../db/fixtures/books'
import { delAllUserAddedBooks, updateBook } from '../utils/dbUtils'

// Test DB is dropped, migrated and seeded on each `npm run test`
// Therefore test run starts with a freshly seeded DB state, with books in src/db/fixtures/books

afterAll(async () => {
  console.log('Done with booksService test. \nDeleting user added books')
  await delAllUserAddedBooks()
})

const {
  services: { booksService }
} = context

describe('getBooks', () => {
  it('Gets all books', async () => {
    const books = await booksService.getBooks()
    expect(books.every((b) => booksSeeds.some((s) => s.id === b.id)))
  })
  it('Filters by checked out: true', async () => {
    await updateBook(booksSeeds[0].id, { checkedOut: 1 })
    const books = await booksService.getBooks({ checkedOut: true })
    expect(books.every((b) => b.checkedOut)).toBe(true)
  })
  it('Filters by checked out: false', async () => {
    const books = await booksService.getBooks({ checkedOut: false })
    expect(books.every((b) => !b.checkedOut)).toBe(true)
  })
  it('Filters by search keyword for artist or title', async () => {
    const search = 'borges'
    const books = await booksService.getBooks({ search })
    expect(
      books.every((b) => {
        return (
          b.title.match(new RegExp(search, 'i')) ||
          b.author.match(new RegExp(search, 'i'))
        )
      })
    ).toBe(true)
  })
  it('Filters by genre', async () => {
    const genre = 'fiction'
    const books = await booksService.getBooks({ genre })
    expect(books.every((b) => b.genre.match(new RegExp(genre, 'i')))).toBe(true)
  })
  it('Filters by search, checkedOut and genre', async () => {
    const search = 'borges'
    const genre = 'fiction'
    const checkedOut = true
    const books = await booksService.getBooks({ search, genre, checkedOut })
    expect(
      books.every((b) => {
        return (
          b.title.match(new RegExp(search, 'i')) ||
          b.author.match(new RegExp(search, 'i'))
        )
      })
    ).toBe(true)
    expect(books.every((b) => b.genre === genre)).toBe(true)
    expect(books.every((b) => b.checkedOut === checkedOut)).toBe(true)
  })
})

describe('createBook', () => {
  it('Adds a book and returns the new book', async () => {
    const input = fixtures.inputs.createBookOne
    const newBook = await booksService.createBook(input)

    expect(typeof newBook.id).toBe('string')
    expect(newBook.title).toMatch(input.title)
    expect(newBook.author).toMatch(input.author)
    expect(newBook.genre).toMatch(input.genre)
    expect(newBook.yearPublished).toEqual(input.yearPublished)
    expect(newBook.checkedOut).toBe(false)
    expect(newBook.isPermanentCollection).toBe(false)
    expect(new Date(newBook.createdAt).getTime()).toBeLessThan(
      new Date().getTime()
    )
  })
})
