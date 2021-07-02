
const express = require("express");

const router = express.Router();
const controller = require("../controllers/usersController");

router.get("/crearProducto", controller.crear);
router.get("/editarProducto", controller.editar);

module.exports = router;