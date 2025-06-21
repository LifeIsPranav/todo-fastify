const fastify = require('fastify')({ logger: true })

const { PORT } = require('./config/serverConfig')
const app = require('./app')

fastify.register(app)

fastify.listen({ port: PORT }, (err) => {
  if(err) fastify.log.error(err)

  console.log(`Server is up at Port: ${PORT}`)
})