module.exports = function(sequelize, DataTypes){
    let alias = "UsuarioPermitido";

    let cols = {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: false
        }
    }

    let config = {
        tableName: "usuariosPermitidos",
        timestamps: false
    }

    let UsuariosPerimitidos = sequelize.define(alias, cols, config);

    UsuariosPerimitidos.associate = function(models){
        UsuariosPerimitidos.belongsTo(models.User, {
            foreignKey: "id_usuario",
            as: "permited_users"
        });
    }

    return UsuariosPerimitidos;


}