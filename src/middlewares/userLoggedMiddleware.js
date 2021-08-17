const fs = require("fs");
const path = require("path");
const userModels = require('../models/User');


function userLoggedMiddleware(req, res, next){
    res.locals.isLogged =false;

    let emailInCookie = req.cookies.email;
    let userFromCookie = userModels.findByField('email', emailInCookie);

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
    }
    
    if(req.session && req.session.userLogged){

        let email = req.session.userLogged.email;
        res.locals.isPermited = User.findByField("email",email);

        res.locals.image = req.session.userLogged.image;
        res.locals.firstName = req.session.userLogged.firstName;
        res.locals.lastName = req.session.userLogged.lastName;
        res.locals.isLogged = true;
    }

    

    next();
}


const User = {
    fileName: path.join(__dirname, "../database/usuariosPermitidos.json"),
    findAll: function(){
        return this.getData();
    },  
    //Obtiene los datos
    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    }
}



module.exports = userLoggedMiddleware;