const fs = require("fs");
const path = require("path");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require("../database/models");

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
      //aaaaaaaaaaaaaaaaaaaaaaaaaaa
        let imagen;
        if(req.file){
          imagen = req.file.filename;
        }
        else{
          imagen = "no-image-found.png";
        }

        let productsInfo = {
            ...req.body,
            image: imagen,
            disponible: 1
        };
      //aaaaaaaaaaaaaaaaaaaaa
        db.Product.create(
          productsInfo
        )
        res.redirect("/productos/#cont-gen-prod");
    },

    edit: (req, res) => {
        db.Product.findOne({
          where:{
              id: req.params.id
          }
      }).then((productToEdit) => {          
        if (productToEdit) {
          res.render("users/editarProducto", { productToEdit });
        } else {
          res.render("error");
        }
      })
    },

      update: (req, res) => {
        const productInfo = req.body; 

        db.Product.update({
          ...productInfo
        }, {
          where: {
            id: req.params.id
          }
        });
        res.redirect("/");
      },
      destroy: (req, res) => {
    
        db.Product.destroy({
          where: {id: req.params.id}
        })
        res.redirect("/");
      },
};

module.exports = controller;