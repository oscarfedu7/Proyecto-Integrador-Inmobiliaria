const fs = require("fs");
const path = require("path");
const { all } = require("../routes/main");


const User = {
    fileName: path.join(__dirname, "../database/users.json"),
    //Obtiene los datos
    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    findAll: function(){
        return this.getData();
    },  
    //Busca un usuario por id
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(function(oneUser){
            return oneUser.id === id;
        });
        return userFound;
    },  

    //Busca los usuarios por un campo que le pases
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

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
        
    }


}


module.exports=User;