import { GraphQLInt, GraphQLList } from 'graphql'
import PedidoType from '../type'
import { getAll, getById } from '../resolvers'

export const pedidos = {
  type: new GraphQLList(PedidoType),
  resolve: getAll
}

export const pedido = {
  type: PedidoType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}