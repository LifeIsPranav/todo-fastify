const fp = require("fastify-plugin");
const db = require("./db");
const todoRepository = require("./repository/todoRepository");
const todoService = require("./services/todoService");

async function app(fastify, options) {
  await fastify.register(db)
  await fastify.register(todoRepository)
  await fastify.register(todoService)
  await fastify.register(require('./routes/api/apiRouter'), { prefix: '/api' })
}

module.exports = app