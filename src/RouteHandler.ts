import { FastifyReply, FastifyRequest } from 'fastify'
import context from './context'
import { castGetBooksParams, filterObj } from './utils'
import requireApiKey from './validations/requireApiKey'

const { booksService } = context.services

// fastify-openapi-glue library expects the method names in the Service class to match the `operationId` from each path in your schema. That's how it will know the request method (GET/POST, etc) and the schema for the request/response of each route
class RouteHandler {
  constructor() {}

  async healthcheck(_req: FastifyRequest, res: FastifyReply) {
    return res.send({ message: 'ok' })
  }

  async getBooks(req: FastifyRequest, res: FastifyReply) {
    const params = castGetBooksParams(req.query as GetBooksParamsRaw)
    const books = await booksService.getBooks(params)
    return res.send(books)
  }

  async createBook(req: FastifyRequest, res: FastifyReply) {
    requireApiKey(req)
    // filter out extraneous inputs
    const filteredInput = filterObj<CreateBookInput>(
      req.body as CreateBookInput,
      ['title', 'author', 'genre', 'yearPublished']
    )
    const newBook = await booksService.createBook(filteredInput)
    return res.status(201).send(newBook)
  }

  async getBook(req: FastifyRequest, res: FastifyReply) {
    const book = await booksService.getBook(req.params as IdParams)
    return res.send(book)
  }

  async updateBook(req: FastifyRequest, res: FastifyReply) {
    requireApiKey(req)
    const params = req.params as IdParams
    const input = req.body as UpdateBookInput
    const book = await booksService.updateBook(params, input)
    return res.send(book)
  }

  async deleteBook(req: FastifyRequest, res: FastifyReply) {
    requireApiKey(req)
    const params = req.params as IdParams
    await booksService.deleteBook(params)
    return res.code(204).send()
  }
}

export default RouteHandler
