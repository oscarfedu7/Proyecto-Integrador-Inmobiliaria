const controller = {
    crear: (req, res) => {
        res.status(200).render("users/crearProducto");
    },
    editar: (req, res) => {
        res.status(200).render("users/editarProducto");
    },
};

module.exports = controller;