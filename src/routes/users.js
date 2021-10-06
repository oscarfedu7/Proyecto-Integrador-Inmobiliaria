
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const controller = require("../controllers/usersController");
const productsPermitedMiddleware = require('../middlewares/productsPermitedMiddleware');
const {body} = require('express-validator');


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

const validations=[
    body('description').isLength({min:20}).notEmpty().withMessage('Debes de escribir una descripcion con almenos 20 caracteres'),
    body('price').notEmpty().withMessage('Debes escribir el precio'),
    body('category').notEmpty().withMessage('Debes de escribir la categoria'),
    body('city').notEmpty().withMessage('Eige tu ciudad'),
    body('address').notEmpty().withMessage('Debes escribir tu dirección'),
    body('tipo').notEmpty().withMessage('Debes de escribir el tipo de propiedad'),
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
		
		//if (!file) {
		//	throw new Error('Tienes que subir una imagen');
	//	} else {
        if(file){
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
        }
	//	}

		return true;
	})
]


router.get("/crearProducto",productsPermitedMiddleware, controller.crear);
router.get("/editarProducto", controller.editar);

router.post("/crearProducto", upload.single('image'), validations, controller.create) ;

router.get("/editarProducto/:id",productsPermitedMiddleware, controller.edit);
router.put("/:id",productsPermitedMiddleware, controller.update);
router.delete('/:id', productsPermitedMiddleware, controller.destroy); 

module.exports = router;