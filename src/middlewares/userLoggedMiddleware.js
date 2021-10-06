const fs = require("fs");
const path = require("path");
const db = require("../database/models");
//const User = require('../models/User')


function userLoggedMiddleware(req, res, next){
    res.locals.isLogged =false;

  //  let emailInCookie = req.cookies.userEmail;
    //let userFromCookie = User.findByField('email', emailInCookie);    

   // if (userFromCookie) {
     //   req.session.userLogged = userFromCookie;
   // }

    if(req.session && req.session.userLogged){

        //let email = req.session.userLogged.email;
        //res.locals.isPermited = User.findByField("email",email);
        //


        let permited=db.UsuarioPermitido.findOne({
            where:{
                id_usuario: req.session.userLogged.id
            }
        }).then((isPermited) => {
            res.locals.isPermited = isPermited;
            res.locals.image = req.session.userLogged.image;
            res.locals.firstName = req.session.userLogged.firstName;
            res.locals.lastName = req.session.userLogged.lastName;
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
            next();
        })

    }
    else{
        next();
    }


}


module.exports = userLoggedMiddleware;