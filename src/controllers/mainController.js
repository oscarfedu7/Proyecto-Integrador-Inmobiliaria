const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {validationResult} = require('express-validator');

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
        const resultValidation = validationResult(req);
        console.log(resultValidation.errors);
        if(resultValidation.errors.length > 0){
            res.status(200).render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        else{
            const usersInfo = req.body;
            console.log(usersInfo);
            let indice = users.length-1; 
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
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
            res.redirect("/login");
        }
    },
};

module.exports = controller;