const fs = require("fs");
const path = require("path");

const db = require("../database/models");

let a;

const User = {
    //fileName: path.join(__dirname, "../database/users.json"),
    //Obtiene los datos
    getData: function() {
        return db.User.findAll()
        .then(function(users){
            return console.log(users[0].firstName);
        })
    },

    findAll: function(){
        return this.getData();
    },  
    //Busca un usuario por id
    findByPk: function(id){
        let userFound = db.User.findByPk(id);
        return userFound;
    },     
    //Busca los usuarios por un campo que le pases
    findByField: function(field, text){
        let userFound = db.User.findOne({
            where:{
                firstName: text 
            }
        }).then((res) => {
            a = res;
            console.log(res.email);
        })
        return userFound;
    },

    /*
    //Crea un usuario o registra
    create: function(userData){
        let allUsers = this.findAll();
        let indice = allUsers.length-1;
        let id=1;
        if(indice != -1){
            id = allUsers[indice].id+1;
        }
        allUsers.push({id:id, ...userData});

        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, 2));
        return true;
    },
    //ELimina un usuario con cierto id
    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, 2));
        return true;
        
    } */

}
let ab = db.UsuarioPermitido.findOne({
    include: ["permited_users"],
    where:{
        id_usuario: "2"
    },   

}).then((isPermited) => { 
  return true;
})
console.log(ab + "holaaa");

module.exports=User;