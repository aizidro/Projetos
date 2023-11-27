const express = require("express");
const router = express.Router();
const restaurante = require("../controllers/rest")
const con = require('../dao/connect')

router.post("/login", restaurante.autenticar)
router.get("/clientes", restaurante.listar)
router.get("/lista", restaurante.listar)
// router.get("/listaInfo/:id", restaurante.listarInfo)
router.post("/criar", restaurante.create)
router.post("/criarAvaliacao", restaurante.createAvaliacao)

router.get('/restauranteInfo/:id', (req, res) => {
    const {id} = req.params;
    const string = `SELECT r.id, r.nome, r.endereco, r.telefone, c.nome AS categoria
    FROM restaurante r
    INNER JOIN categoria c
    WHERE r.id = ${id}
    AND r.categoriaId = c.id;`;

    con.query(string, (err, result) => {
        if(err) {
            return res.status(404).json({success: false, message: err}).end()
        }
        else {
           return res.status(200).json({success: true, message: result}).end()
        }
    })
})

module.exports = router;