
const controller = {
    carrito: (req, res) => {
        res.status(200).render("productos/productCart");
    },
    detalle: (req, res) => {
        res.status(200).render("productos/productDetail");
    },
    productos: (req, res) => {
        res.status(200).render("productos/productos"); //aquí van a ir los productos
    },
};

module.exports = controller;