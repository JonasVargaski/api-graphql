import models from '../../models'

export async function getById(parentValue, { id }) {
  return await models.Pedido.findOne({ where: { id } })
}

export async function getAll() {
  return await models.Pedido.findAll({ order: [['createdAt', 'DESC']] })
}

export async function create(parentValue, { nome, descricao, quantidade, status, preco, pessoaId, produtoId }) {
  return await models.Pedido.create({ nome, descricao, quantidade, status, preco, pessoaId, produtoId })
}

export async function remove(parentValue, { id }) {
  return await models.Pedido.destroy({ where: { id } })
}
