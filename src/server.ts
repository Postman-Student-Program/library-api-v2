import Fastify from 'fastify'
import openapiGlue from 'fastify-openapi-glue'
import RouteHandler from './RouteHandler'

const glueOptions = {
  specification: `${__dirname}/schema.yaml`,
  service: new RouteHandler()
}

const fastify = Fastify({ logger: true })

fastify.register(openapiGlue, glueOptions)

const PORT = process.env.PORT || 4000

fastify.listen(PORT, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
