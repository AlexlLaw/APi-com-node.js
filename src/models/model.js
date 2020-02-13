const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const usuario = new mongoose.Schema({

    nome:{
        type:String,
        required: true,
    },
    gitHub:{
        type:String, 
        required: true,
    }
})
usuario.plugin(mongoosePaginate)
mongoose.model("Cadastro", usuario)