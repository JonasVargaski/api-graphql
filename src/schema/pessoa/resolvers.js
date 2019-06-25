import models from '../../models'

export async function getById(parentValue, { id }) {
  return await models.Pessoa.findOne({ where: { id } })
}

export async function getAll() {
  return await models.Pessoa.findAll({ order: [['createdAt', 'DESC']] })
}

export async function create(parentValue, { nome, endereco, cidade, cpf, email, contato }) {
  return await models.Pessoa.create({ nome, endereco, cidade, cpf, email, contato })
}

export async function remove(parentValue, { id }) {
  return await models.Pessoa.destroy({ where: { id } })
}
