module.exports = function(sequelize, DataTypes){
    let alias = "Product";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city:{
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.DOUBLE 
        },
        image:{
            type: DataTypes.STRING
        },
        category:{
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.STRING
        },
        tipo:{
            type: DataTypes.STRING
        },
        disponible:{
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let Productos = sequelize.define(alias, cols, config)


    Productos.associate = function(models){
        Productos.belongsToMany(models.User, {
            as: "users_ventas",
            through: "ventas",
            foreignKey: "id_producto",
            otherKey: "id_comprador",
            timestamps: false
        });
    }

    return Productos;
}