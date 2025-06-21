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
  handler: function(req, res) {
    console.log("*******************************")
    console.log(req.body)
    console.log("*******************************")
    console.log(fastify)
    console.log("*******************************")
    console.log(this.key)
    console.log("*******************************")
    return 'world'
  }
})

function samplePlugin(fastify, options, done) {
  console.log('Executing my plugin')
  fastify.decorate('key', 'value')
  console.log(fastify)
  done()
}

fastify.register(samplePlugin, {})

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