import Sequelize from 'sequelize'
import databaseConnection from '../setup/databaseConnection'

const models = {
  Pessoa: databaseConnection.import('./pessoa'),
  Pedido: databaseConnection.import('./pedido'),
  Produto: databaseConnection.import('./produto'),
  
}

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
