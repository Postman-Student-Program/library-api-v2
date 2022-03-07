interface Book {
  id: string
  title: string
  author: string
  genre: string
  yearPublished: number
  checkedOut: boolean
  isPermanentCollection: boolean
  createdAt: string
}

interface CreateBookInput {
  title: string
  author: string
  genre: string
  yearPublished: number
}
interface UpdateBookInput {
  title?: string
  author?: string
  genre?: string
  yearPublished?: number
  checkedOut?: boolean
}

interface IdParams {
  id: string
}
interface GetBooksParamsRaw {
  search?: string
  checkedOut?: string
  genre?: string
}

interface GetBooksParams {
  search?: string
  checkedOut?: boolean
  genre?: string
}

type KnexDb = Knex<any, unknown[]>
