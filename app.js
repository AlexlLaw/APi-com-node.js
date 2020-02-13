
const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir');



const port = 3000;

//iniciando o app
const app = express()
app.use(express.json())
//conexão com banco de dados
mongoose.connect('mongodb://localhost:27017/apirest', {useNewUrlParser: true, useUnifiedTopology: true} )

requireDir('./src/models')

app.use('/api', require('./src/rotas'))


app.listen(port)

//fazer consumir esses dados  https://jsonmock.hackerrank.com/api/article_users