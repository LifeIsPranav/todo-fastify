const fastify = require('fastify')({ logger: true, http2: true })  // Root Application Instance

fastify.get('/ping', (req, res) => {
  // console.log(req)
  return "pong"
})

fastify.route({
  url: '/hello',
  method: 'GET',
  handler: function() {
    return 'world'
  }
})

const PORT = 8080
async function start() {
  try {
    await fastify.listen({ port: PORT })
    console.log(`Server is Up on PORT: ${PORT}`)
  } catch (error) {
    console.log(error)
  }
}

start()