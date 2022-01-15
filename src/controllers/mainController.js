let productos = require("../database/menu.json");

const controller = {
  index: (req, res) => {
    res.render("index", { productos: productos });
  },
};

module.exports = controller;
