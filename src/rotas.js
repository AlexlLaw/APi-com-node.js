const express = require('express')
const rotas = express.Router();
const Controler = require('./controler/controler')

rotas.get('/cadastro', Controler.listar)
rotas.get('/cadastro/:id', Controler.ListarUM)
rotas.post('/cadastro', Controler.inserir)
rotas.delete('/cadastro/:id', Controler.destroy)
rotas.put('/cadastro/:id', Controler.update)

module.exports= rotas;