const fp = require("fastify-plugin")

class TodoRepository {
  constructor(db){
    this.db = db
  }

  getAll() {

  }

  getOne(id) {

  }

  deleteOne(id) {

  }

  deleteAll() {

  }
}

async function todoRepository(fastify, options) {
  const { db } = fastify
  const repo = new TodoRepository(db)
  fastify.decorate('todoRepository', repo)
}

module.exports = fp(todoRepository)