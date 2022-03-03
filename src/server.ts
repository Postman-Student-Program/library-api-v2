import Fastify from 'fastify'
import schema from './generated/schema.json'

const fastify = Fastify({ logger: process.env.NODE_ENV === 'development' })

fastify.get('/ping', async (request, reply) => {
  return 'pong\n'
})

fastify.get('/books', async (request, reply) => {
  return 'pong\n'
})

const PORT = process.env.PORT || 4000

fastify.listen(PORT, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
