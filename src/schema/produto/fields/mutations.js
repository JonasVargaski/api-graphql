import { GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql'

import ProdutoType from '../type'
import { create, remove } from '../resolvers'

export const produtoCreate = {
  type: ProdutoType,
  args: {
    descricao: {
      name: 'descricao',
      type: GraphQLString
    },
    precoCusto: {
      name: 'precoCusto',
      type: GraphQLFloat
    },
    precoVenda: {
      name: 'precoVenda',
      type: GraphQLFloat
    },
    complemento: {
      name: 'complemento',
      type: GraphQLString
    },
    cor: {
      name: 'cor ',
      type: GraphQLString
    },
    tamanho: {
      name: 'tamanho ',
      type: GraphQLString
    }
  },
  resolve: create
}

// produto remove
export const produtoRemove = {
  type: ProdutoType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}