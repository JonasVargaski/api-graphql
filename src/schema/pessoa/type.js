import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
const PessoaType = new GraphQLObjectType({
  name: 'pessoas',
  description: '...',

  fields: () => ({
    id: { type: GraphQLInt },
    nome: { type: GraphQLString },
    endereco: { type: GraphQLString },
    cidade: { type: GraphQLString },
    cpf: { type: GraphQLString },
    email: { type: GraphQLString },
    contato: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default PessoaType