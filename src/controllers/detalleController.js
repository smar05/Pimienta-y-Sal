let productos = require("../database/menu.json");

const controller = {
  detalleProducto: (req, res) => {
    let id = req.params.id;

    let producto = productos.find((producto) => producto.id == id);

    res.render("detalleMenu", { producto: producto });
  },
};

module.exports = controller;
