

const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
    carrito: (req, res) => {
        res.status(200).render("productos/productCart");
    },
    detalle: (req, res) => {
        let productId = req.params.id;
        console.log(productId);
        const product = products.find((producto) => {
          return producto.id == productId;
        });

        console.log(product);
        if (product) {
            res.status(200).render("productos/productDetail",{ product });
        } else {
            res.send("Error");
            //res.render("error");
        }

        
    },
    productos: (req, res) => {
        res.status(200).render("productos/productos", {products}); //aquí van a ir los productos
    }
};

module.exports = controller;