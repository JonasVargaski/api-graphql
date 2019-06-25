export default (sequelize, DataTypes) => {
    return sequelize.define('pedido', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nome: {
            type: DataTypes.STRING
        },
        descricao: {
            type: DataTypes.STRING
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('D', 'F', 'C'),
            default: 'D'
        },
        preco: {
            type: DataTypes.FLOAT
        },
        pessoaId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pessoas',
                key: 'id'
            }
        },
        produtoId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'produtos',
                key: 'id'
            }
        },
    });
}

