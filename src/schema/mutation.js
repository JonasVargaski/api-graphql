import {GraphQLObjectType} from 'graphql'

import * as produto from './produto/fields/mutations'
import * as pessoa from './pessoa/fields/mutations'
import * as pedido from './pedido/fields/mutations'

const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...produto,
    ...pessoa,
    ...pedido
  }
})

export default mutation
