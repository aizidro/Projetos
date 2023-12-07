const con = require("../dao/connect")

const autenticar = (req, res) => {
    const { email, senha } = req.body;
    let query = `SELECT * FROM cliente WHERE email = '${email}' AND senha = '${senha}'`;

    con.query(query, (err, response) => {
        if (err == undefined) {
            if (response.length == 0) {
                res.status(401).json({ "msg": "Matricula ou Senha Invalidos" }).end();
            } else {
                let corretor = response[0];

                delete corretor.senha;

                res.status(200).json(corretor).end();
            }
        } else {
            res.status(401).json(err).end();
        }
    });
}

const listar = (req, res) => {
    let query = 'SELECT * FROM restaurante INNER JOIN avaliacao ON restaurante.id = avaliacao.restauranteId'
    con.query(query, (err, response) => {
        if (err == null) {
            res.status(200).json(response).end()
        } else {
            res.status(401).json(err).end();
        }
    })
}

const listarInfo = (req, res) => {
    const { id } = req.params
    let query = `SELECT * FROM restaurante where id = ${id}`
    con.query(query, (err, response) => {
        if (err == null) {
            res.status(200).json(response).end()
        } else {
            res.status(401).json(err).end();
        }
    })
}

const listarRestaurantes = (req, res) => {
    const { id } = req.params
    let query = `SELECT * FROM restaurante`
    con.query(query, (err, response) => {
        if (err == null) {
            res.status(200).json(response).end()
        } else {
            res.status(401).json(err).end();
        }
    })
}

const create = (req, res) => {
    const { nome, categoria, endereco, telefone } = req.body
    let string = `INSERT INTO restaurante VALUE(default,'${nome}','${categoria}','${endereco}', '${telefone}')`
    con.query(string, (err, result) => {
        if (err == null)
            res.status(201).json({success: true, result}).end()
        else
            {
                console.log(err)
                res.status(500).json(err).end()
            }
    })
}

const createAvaliacao = (req, res) => {
    const { restauranteId, data, nota, descricao } = req.body
    let string = `INSERT INTO avaliacao VALUE('${restauranteId}','${data}','${nota}', '${descricao}')`
    con.query(string, (err, result) => {
        if (err == null)
            res.status(201).json({success: true, result}).end()
        else
            res.status(500).json(err).end()
        
    })
}

const deletar = (req, res) => {
    let string = `DELETE FROM restaurante WHERE id = '${req.params.id}'`
    con.query(string, (err, result) => {
        if (result.affectedRows > 0)
            return res.status(204).json({ success: true, message: "Deletado com sucesso" }).end()
        else
            return res.status(404).json({ success: false, message: "Erro ao deletar" }).end()
    })
}

module.exports = {
    autenticar,
    listar,
    listarInfo,
    create,
    createAvaliacao,
    deletar,
    listarRestaurantes
}