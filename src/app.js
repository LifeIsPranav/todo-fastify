const fp = require("fastify-plugin");

async function app(fastify, options) {
  fastify.register(require('./routes/api/apiRouter'), { prefix: '/api' })
}

module.exports = app