import { GraphQLInt, GraphQLList } from 'graphql'
import ProdutoType from '../type'
import { getAll, getById } from '../resolvers'

export const produtos = {
  type: new GraphQLList(ProdutoType),
  resolve: getAll
}

export const produto = {
  type: ProdutoType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}