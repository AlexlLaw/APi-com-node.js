const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');

module.exports={
    //listar tudo

    async listar(req, res){
          const cadastro = await Cadastro.find()
          return res.json(cadastro)
    },
    //listar por id
    async ListarUM(req, res){
        const cadastro = await Cadastro.findById(req.params.id)
        res.json(cadastro);
    },
    //inserir
    async inserir(req, res){
        const cadastro = await Cadastro.create(req.body)
        return res.json(cadastro)
    },
    //atualizar
    async update(req, res){
        const cadastro = await Cadastro.findByIdAndUpdate(req.params.id, req.body, {new : true})
       return res.json(cadastro)
    },
    //deletar
    async destroy(req, res){
        await Cadastro.findByIdAndRemove(req.params.id)
         return res.send()
        
  }
    
   
} 