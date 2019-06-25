import { GraphQLInt, GraphQLList } from 'graphql'
import PessoaType from '../type'
import { getAll, getById } from '../resolvers'

export const pessoas = {
  type: new GraphQLList(PessoaType),
  resolve: getAll
}

export const pessoa = {
  type: PessoaType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}