
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const controller = require("../controllers/usersController");
const productsPermitedMiddleware = require('../middlewares/productsPermitedMiddleware');


const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../../public/img'))
        },
         filename: (req, file, cb) => {
            console.log(file);
            const newFilename = 'group-'+Date.now()+path.extname(file.originalname);
            cb(null, newFilename);
         }
});
const upload = multer({storage});


router.get("/crearProducto",productsPermitedMiddleware, controller.crear);
router.get("/editarProducto", controller.editar);

router.post("/crearProducto", upload.single('image'), controller.create) ;

router.get("/edit/:id",productsPermitedMiddleware, controller.edit);
router.put("/:id",productsPermitedMiddleware, controller.update);
router.delete('/:id', productsPermitedMiddleware, controller.destroy); 

module.exports = router;