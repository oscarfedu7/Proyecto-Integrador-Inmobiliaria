const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {validationResult} = require('express-validator');
const user = require('../models/User.js');
const { Console } = require("console");
const bcryptjs = require('bcryptjs');


const controller = {
    index: (req, res) => {
        res.status(200).render("index");
    },
    login: (req, res) => {
        res.status(200).render("login");
    },
    register: (req, res) => {
        res.status(200).render("register");
    },
    addUser: (req, res) => {
        let userInDB = user.findByField('email', req.body.email);
        const resultValidation = validationResult(req);


        //si hasy errores en la validación
        if(resultValidation.errors.length > 0){
            res.status(200).render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        console.log(userInDB);
        //si ya está registrado
        if (userInDB) {
            console.log(userInDB);
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }

        //crear al usuario
        
  //      let indice = users.length-1; 
        let imagen;
        if(req.file){
            imagen = req.file.filename;
        }
        else{
            imagen = "avatar.jpg";
        }

        let usersInfo = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: imagen,
        };

   //     let usersInfo=req.body;
    //    console.log(usersInfo);

    /*    
        if(req.file){
            users.push({
            ...usersInfo,
                image:req.file.filename,
                id: users[indice].id+1,
            });
        }else{
            users.push({
                ...usersInfo,
                image:"avatar.jpg",
                id: users[indice].id+1,
            });
        }
        */
       // users.push(usersInfo);
        //fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        user.create(usersInfo);
        res.redirect("/login");    
    },
    deleteUser: (req, res) => {
        user.delete(req.body.id);
    }

};

module.exports = controller;