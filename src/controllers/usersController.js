const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
    crear: (req, res) => {
        res.status(200).render("users/crearProducto");
    },
    editar: (req, res) => {
        res.status(200).render("users/editarProducto");
    },
    create: (req, res) => {
        const productInfo = req.body;
        products.push({
          ...productInfo,
          id: products.length + 1,
          image: "casa2.jpg",
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect("/productos/#cont-gen-prod");
    }
};

module.exports = controller;