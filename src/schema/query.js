import { GraphQLObjectType } from 'graphql'

import * as produto from './produto/fields/query'
import * as pessoa from './pessoa/fields/query'
import * as pedido from './pedido/fields/query'

const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...produto,
    ...pessoa,
    ...pedido
  })
})

export default query