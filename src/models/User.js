const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const User = {
    fileName: './database/users.json',

    getData: 

    create: function(userData){

    }


}