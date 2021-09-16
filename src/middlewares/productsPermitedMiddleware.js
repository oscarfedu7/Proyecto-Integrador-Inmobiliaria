const fs = require("fs");
const path = require("path");
const db = require("../database/models");

function productsPermitedMiddleware (req, res, next){
    if(req.session && !req.session.userLogged){
        return res.redirect('/');
    }
    else if(req.session && req.session.userLogged){

        db.UsuarioPermitido.findOne({
            include: ["permited_users"],
            where:{
                id_usuario: req.session.userLogged.id
            }, 
        }).then((isPermited) => {  
            console.log(isPermited+"dddddddddd7777");
            if(!isPermited){
                return res.redirect('/');
            }
            else{
                next();
            }
        })        
    }
    else{
        next();
    }

}


module.exports = productsPermitedMiddleware;