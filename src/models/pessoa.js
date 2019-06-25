export default (sequelize, DataTypes) => {
    return sequelize.define('pessoa', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nome: {
            type: DataTypes.STRING
        },
        endereco: {
            type: DataTypes.STRING
        },
        cidade: {
            type: DataTypes.STRING
        },
        cpf: {
            type: DataTypes.STRING 
        },
        email: {
            type: DataTypes.STRING
        },
        contato: {
            type: DataTypes.STRING
        }
    });
}

