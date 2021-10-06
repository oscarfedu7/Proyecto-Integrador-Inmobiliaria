module.exports = function(sequelize, DataTypes){
    let alias = "Vendedor";

    let cols = {
        id_usuario: {
            type: DataTypes.INTEGER
        },
        comision: {
            type: DataTypes.INTEGER,
        }
    }

    let config = {
        tableName: "vendedores",
        timestamps: false
    }

    let Vendedores = sequelize.define(alias, cols, config)


    Vendedores.associate = function(models){
        Vendedores.belongsTo(models.User, {
            foreignKey: "id_usuario",
            as: "vendedores_users"
        });
    }

    return Vendedores;

}