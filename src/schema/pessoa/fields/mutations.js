import { GraphQLString, GraphQLInt } from 'graphql'

import PessoaType from '../type'
import { create, remove } from '../resolvers'

export const pessoaCreate = {
  type: PessoaType,
  args: {
    nome: {
      name: 'nome',
      type: GraphQLString,
    },
    endereco: {
      name: 'endereco',
      type: GraphQLString,
    },
    cidade: {
      name: 'cidade',
      type: GraphQLString,
    },
    nome: {
      name: 'nome',
      type: GraphQLString,
    },
    cpf: {
      name: 'cpf',
      type: GraphQLString,
    },
    email: {
      name: 'email',
      type: GraphQLString,
    },
    contato: {
      name: 'contato',
      type: GraphQLString,
    },
  },
  resolve: create
}

export const pessoaRemove = {
  type: PessoaType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}