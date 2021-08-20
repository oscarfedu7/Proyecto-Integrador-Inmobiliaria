const fs = require("fs");
const path = require("path");

const db = require("../database/models");

const controller = {
    carrito: (req, res) => {
        res.status(200).render("productos/productCart");
    },
    detalle: (req, res) => {
        let productId = req.params.id;
        console.log(productId);

        db.Product.findOne({
            where:{
                id: productId 
            }
        }).then((product) => {  

            console.log(product);
            if (product) {
                res.status(200).render("productos/productDetail",{ product });
            } else {
                res.send("Error");
                //res.render("error");
            }
        })
        
    },
    productos: (req, res) => {
        db.Product.findAll()
        .then(function(products){
            res.status(200).render("productos/productos", {products}); //aquí van a ir los productos
        })
    }
};

module.exports = controller;