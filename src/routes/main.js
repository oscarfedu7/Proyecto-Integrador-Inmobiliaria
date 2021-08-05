
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const controller = require("../controllers/mainController");
const {body} = require('express-validator');

const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../../public/img/users'))
        },
         filename: (req, file, cb) => {
             console.log(file);
            const newFilename = 'group-'+Date.now()+path.extname(file.originalname);
            cb(null, newFilename);
         }
});
const upload = multer({storage});

const validations=[
    body('firstName').notEmpty().withMessage('Debes de escribir tu nombre'),
    body('lastName').notEmpty().withMessage('Debes de escribir tu apellido'),
    body('email').isEmail().notEmpty().withMessage('Debes de escribir tu email'),
    body('city').notEmpty().withMessage('Eige tu ciudad'),
    body('address').notEmpty().withMessage('Debes escribir tu dirección'),
    body('codigo_postal').notEmpty().withMessage('Debes escribir tu código postal'),
    body('password').isLength({min:6}).notEmpty().withMessage('Debes de escribir una contraseña con al menos 6 carácteres'),
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

router.get("/", controller.index);
router.get("/index", controller.index);
router.get("/login", controller.login);
router.get("/register", controller.register);
router.post("/register",upload.single('image'), validations, controller.addUser);
module.exports = router;