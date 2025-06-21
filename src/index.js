const fastify = require('fastify')({ logger: true })  // Root Application Instance

fastify.addHook('onReady', function listener(done) {
  console.log('Server is Ready to Take Request')
  done()
})

fastify.addHook('onClose', function listener(done) {
  console.log('Server is Stopping') 
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