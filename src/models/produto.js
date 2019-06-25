export default (sequelize, DataTypes) => {
    return sequelize.define('produto', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        descricao: {
            type: DataTypes.STRING
        },
        precoCusto: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        precoVenda: {
            type: DataTypes.FLOAT
        },
        complemento: {
            type: DataTypes.STRING
        },
        cor: {
            type: DataTypes.STRING
        },
        tamanho: {
            type: DataTypes.STRING
        },
    });
}

