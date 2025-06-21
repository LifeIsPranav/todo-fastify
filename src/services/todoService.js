const fp = require("fastify-plugin")

class TodoService {
  constructor(todoRepository){
    this.todoRepository = todoRepository
  }

  getAll() {
    return this.todoRepository.getAll()
  }
  
  getOne(id) {
    return this.todoRepository.getOne(id)
  }

  deleteOne(id) {
    return this.todoRepository.deleteOne(id)
  }
  
  deleteAll() {
    return this.todoRepository.deleteAll
  }
}

async function todoService(fastify, options) {
  const { todoRepository } = fastify
  const service = new TodoService(todoRepository)
  fastify.decorate('todoService', service)
}

module.exports = fp(todoRepository)