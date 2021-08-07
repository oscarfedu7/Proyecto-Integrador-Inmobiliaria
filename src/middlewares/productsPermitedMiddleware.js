const fs = require("fs");
const path = require("path");

function productsPermitedMiddleware (req, res, next){
    if(req.session && !req.session.userLogged){
        return res.redirect('/');
    }
    else if(req.session && req.session.userLogged){
        let email = req.session.userLogged.email;
        let isPermited = User.findByField("email",email);
        console.log(isPermited+"dddddddddd7777");
        if(!isPermited){
            return res.redirect('/');
        }   
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

module.exports = productsPermitedMiddleware;