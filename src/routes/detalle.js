const express = require("express");
const router = express.Router();
const detalleController = require("../controllers/detalleController");

router.get("/:id", detalleController.index);

module.exports = router;
