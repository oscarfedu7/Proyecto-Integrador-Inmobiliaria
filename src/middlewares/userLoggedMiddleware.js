const fs = require("fs");
const path = require("path");
const db = require("../database/models");


function userLoggedMiddleware(req, res, next){
    res.locals.isLogged =false;
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
            next();
        })

    }
    else{
        next();
    }
}


module.exports = userLoggedMiddleware;