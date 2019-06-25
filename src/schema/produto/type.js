// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Produto type
const ProdutoType = new GraphQLObjectType({
  name: 'produto',
  description: '...',

  fields: () => ({
    id: { type: GraphQLInt },
    descricao: { type: GraphQLString },
    precoCusto: { type: GraphQLString },
    precoCusto: { type: GraphQLString },
    precoVenda: { type: GraphQLString },
    complemento: { type: GraphQLString },
    cor: { type: GraphQLString },
    tamanho: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ProdutoType