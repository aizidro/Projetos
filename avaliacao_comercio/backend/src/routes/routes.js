const express = require("express");
const router = express.Router();
const restaurante = require("../controllers/rest")

router.post("/login", restaurante.autenticar)
router.get("/clientes", restaurante.listar)
router.get("/lista", restaurante.listar)
router.get("/listaInfo/:id", restaurante.listarInfo)
router.post("/criar", restaurante.create)
router.post("/criarAvaliacao", restaurante.createAvaliacao)

module.exports = router;