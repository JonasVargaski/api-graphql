import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, } from 'graphql'

const PedidoType = new GraphQLObjectType({
  name: 'pedido',
  description: '...',

  fields: () => ({
    id: { type: GraphQLInt },
    nome: { type: GraphQLString },
    descricao: { type: GraphQLString },
    quantidade: { type: GraphQLString },
    status: { type: GraphQLString },
    preco: { type: GraphQLFloat },
    pessoaId: { type: GraphQLInt },
    produtoId: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  })
})


export default PedidoType