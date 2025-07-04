async function getAllTodos(req, res) {
  const { todoService } = this  // refers to the fastify instance
  const response = await todoService.getAll()
  return res.status(200).send({ response })
}

async function createTodo(req, res) {
  const { todoService } = this  // refers to the fastify instance
  const response = await todoService.create(req.body.todoText)
  return res.status(201).send({ response })
}

async function getTodo(req, res) {
  const { todoService } = this
  const response = await todoService.getOne(req.params.id)
  return res.status(200).send({ response })
}

module.exports = {
  getAllTodos,
  createTodo,
  getTodo
}