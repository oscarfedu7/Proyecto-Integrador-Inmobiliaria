const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    //Muestra la vista de crear producto
    crear: (req, res) => {
        res.status(200).render("users/crearProducto");
    },
    //Muestra la parte de editar del producto
    editar: (req, res) => {
        res.status(200).render("users/editarProducto");
    },
    //Crea el producto
    create: (req, res) => {
        const productInfo = req.body;
        let indice = products.length-1;
        if(req.file){
          products.push({
            ...productInfo,
            image:req.file.filename,
            id: products[indice].id+1,
          });
        }
        else{
          products.push({
            ...productInfo,
            image:"no-image-found.png",
            id: products[indice].id+1,
          });
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect("/productos/#cont-gen-prod");
    },

    edit: (req, res) => {
        const productToEdit = products.find((product) => {
          return product.id == req.params.id;      
        });
        
        if (productToEdit) {
          res.render("users/editarProducto", { productToEdit });
        } else {
          res.render("error");
        }
      },

      update: (req, res) => {
        const productInfo = req.body;
        const productIdex = products.findIndex(producto =>{
          return producto.id == req.params.id;
        });
    
        products[productIdex]={...products[productIdex], ...productInfo};
    
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect("/");
      },
      destroy: (req, res) => {
    
        const productIdex = products.findIndex(producto =>{
          return producto.id == req.params.id;
        });
    
        products.splice(productIdex, 1);
        
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect("/");
      },
};

module.exports = controller;