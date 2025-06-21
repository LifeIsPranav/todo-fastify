const { PORT } = require('./config/serverConfig')

const fastify = require('fastify')({ logger: true })

fastify.listen({ port: PORT }, (err) => {
  if(err) fastify.log.error(err)

  console.log(`Server is up at Port: ${PORT}`)
})