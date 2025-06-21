const fastify = require('fastify')({ logger: true })  // Root Application Instance

fastify.get('/ping', (req, res) => {
  console.log("*******************************")
  console.log(this)
  console.log("*******************************")
  
  return 'pong'
})

fastify.route({
  url: '/hello',
  method: 'GET',
  handler: function() {
    console.log("*******************************")
    console.log(this)
    console.log("*******************************")
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