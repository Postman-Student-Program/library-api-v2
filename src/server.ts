import Fastify from 'fastify'
import knex from './db/knex'

const fastify = Fastify({ logger: true })

fastify.get('/ping', async (request, reply) => {
  return 'pong\n'
})

fastify.get('/books', async (request, reply) => {
  const books = await knex('books').select()
  return books
})

const PORT = process.env.PORT || 4000

fastify.listen(PORT, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
