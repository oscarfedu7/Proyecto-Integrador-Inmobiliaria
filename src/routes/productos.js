
const express = require("express");

const router = express.Router();
const controller = require("../controllers/productosController");


router.get("/", controller.productos);
router.get("/productCart", controller.carrito);
router.get("/productDetail", controller.detalle);
router.get("/:id", controller.detalle);





module.exports = router;