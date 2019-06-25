import { GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql'

import PedidoType from '../type'
import { create, remove } from '../resolvers'

export const pedidoCreate = {
  type: PedidoType,
  args: {
    nome: {
      name: 'nome',
      type: GraphQLString
    },
    descricao: {
      name: 'descricao',
      type: GraphQLString
    },
    quantidade: {
      name: 'quantidade',
      type: GraphQLInt
    },
    status: {
      name: 'status',
      type: GraphQLString
    },
    preco: {
      name: 'preco',
      type: GraphQLFloat
    },
    pessoaId: {
      name: 'pessoaId',
      type: GraphQLInt
    },
    produtoId: {
      name: 'produtoId',
      type: GraphQLInt
    }
  },
  resolve: create
}

export const pedidoRemove = {
  type: PedidoType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}