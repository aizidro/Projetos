const express = require("express");
const router = express.Router();
const restaurante = require("../controllers/rest")
const con = require('../dao/connect')

router.post("/login", restaurante.autenticar)
router.get("/clientes", restaurante.listar)
router.get("/lista", restaurante.listar)
router.get("/listarRestaurantes", restaurante.listarRestaurantes)
// router.get("/listaInfo/:id", restaurante.listarInfo)
router.post("/criar", restaurante.create)
router.post("/criarAvaliacao", restaurante.createAvaliacao)
router.delete("/delete/:id", restaurante.deletar)

router.get('/restauranteInfo/:id', (req, res) => {
    const {id} = req.params;
    let query = `SELECT * FROM restaurante where id = ${id}`

    con.query(query, (err, result) => {
        if(err) {
            return res.status(404).json({success: false, message: err}).end()
        }
        else {
           return res.status(200).json({success: true, message: result}).end()
        }
    })
})

router.get('/listarCategoria', (req, res) => {
    con.query("Select * from categoria", (err, result) => {
        if(err) return res.status(400).json({success: false, err}).end()
        else return res.status(200).json({success: true, result}).end()
    })
})
    
module.exports = router;