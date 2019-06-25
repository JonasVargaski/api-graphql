import models from '../../models'

export async function getById(parentValue, { id }) {
  return await models.Produto.findOne({ where: { id } })
}

export async function getAll() {
  return await models.Produto.findAll({ order: [['createdAt', 'DESC']] })
}

export async function create(parentValue, { nome, descricao, precoCusto, precoVenda, complemento, cor, tamanho }) {
  return await models.Produto.create({ nome, descricao, precoCusto, precoVenda, complemento, cor, tamanho })
}

export async function remove(parentValue, { id }) {
  return await models.Produto.destroy({ where: { id } })
}
