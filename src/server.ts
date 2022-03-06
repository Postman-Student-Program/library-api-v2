import Fastify from 'fastify'

import context from './buildContext'
import { castGetBooksParams, filterObj } from './utils'

const { booksService } = context.services

const fastify = Fastify({ logger: true })

fastify.get('/books', async (req, res) => {
  const params = castGetBooksParams(req.query as GetBooksParamsRaw)
  const books = await booksService.getBooks(params)
  return res.send(books)
})

fastify.post('/books', async (req, res) => {
  const filteredInput = filterObj<CreateBookInput>(
    req.body as CreateBookInput,
    ['title', 'author', 'genre', 'yearPublished']
  )
  const newBook = await booksService.createBook(filteredInput)
  return res.status(201).send(newBook)
})

const PORT = process.env.PORT || 4000

fastify.listen(PORT, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
