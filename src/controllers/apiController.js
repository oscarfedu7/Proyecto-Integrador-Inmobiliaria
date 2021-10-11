const fs = require("fs");
const path = require("path");

const db = require("../database/models");
const { Op } = require("sequelize");
const Users = db.User;
const Products = db.Product;

const controller = {
    getAllUsers: async (req, res) => {
        try {
            let users = await Users.findAll({
                attributes: ['id', 'firstName', 'lastName', 'email', 'city', 'address', 'codigo_postal', 'image'],
                raw: true
            });

            users = users.map(user => {
                return Object.assign({}, {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    city: user.city,
                    address: user.address,
                    codigo_postal: user.codigo_postal,
                    image: "https://grupo8-bits.herokuapp.com/img/users/"+user.image,
                    detail: `/dashboard/users/${user.id}`
                })
            })


            const apiResponse = Object.assign(
                {},
                {
                    count: users.length,
                    users
                }
            );
            return res.status(200).json(apiResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await Users.findByPk(req.params.id, { raw: true });
            const apiResponse = Object.assign(
                {},
                {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    city: user.city,
                    address: user.address,
                    image: "https://grupo8-bits.herokuapp.com/img/users/"+user.image
                }
            );
            return res.status(200).json(apiResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    },

    getAllProducts: async (req, res) => {
        try {
            let products = await Products.findAll({
                attributes: ['id', 'city', 'description', 'price', 'image', 'category', 'tipo','disponible'],
                
            });

            products = products.map(product => {
                return Object.assign({}, {
                    id: product.id,
                    city: product.city,
                    description: product.description,
                    price: product.price,
                    image: "https://grupo8-bits.herokuapp.com/img/"+product.image,
                    category: product.category,
                    tipo: product.tipo,
                    disponible: product.disponible,
                    detail: `/dashboard/products/${product.id}`
                })
            })

            const apiResponse = Object.assign(
                {},
                {
                    count: products.length,
                    products
                }
            );
            return res.status(200).json(apiResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    },
    getProduct: async (req, res) => {
        try {
            const product = await Products.findByPk(req.params.id,
                {attributes: ['id', 'city', 'description', 'price', 'image', 'category', 'tipo', 'disponible']},
                { raw: true });
            const apiResponse = Object.assign(
                {},
                {
                    id: product.id,
                    city: product.city,
                    description: product.description,
                    price: product.price,
                    image: "https://grupo8-bits.herokuapp.com/img/"+product.image,
                    category: product.category,
                    tipo: product.tipo,
                    disponible: product.disponible,
                    detail: `/dashboard/products/${product.id}`
                }
            );

            return res.status(200).json(apiResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    },
};

module.exports = controller;