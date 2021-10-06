module.exports = function(sequelize, DataTypes){
    let alias = "User";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        city:{
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.STRING
        },
        codigo_postal:{
            type: DataTypes.INTEGER
        },
        password:{
            type: DataTypes.STRING
        },
        image:{
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config)

    User.associate = function(models){
        User.belongsToMany(models.Product, {
            as: "products_ventas",
            through: "ventas",
            foreignKey: "id_comprador",
            otherKey: "id_producto",
            timestamps: false
        });

        User.hasMany(models.Vendedor, {
            foreignKey: "id_usuario",
            as: "vendedores"
        });

        User.hasMany(models.UsuarioPermitido, {
            foreignKey: "id_usuario",
            as: "usersPermited"
        });
    }

    return User;

}