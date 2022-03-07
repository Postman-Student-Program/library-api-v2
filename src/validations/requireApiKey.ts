import { FastifyRequest } from 'fastify'
import config from '../config'
import errors from '../errors'

const { UnauthorizedError } = errors

const requireApiKey = (req: FastifyRequest) => {
  const apiKey = req.headers[config.demoApiKeyKey]

  if (!apiKey || apiKey !== config.demoApiKeyVal) {
    throw new UnauthorizedError()
  }
}

export default requireApiKey
