const mongoose = require('mongoose');
const Premio = require('../model/premio');

const criar = async (descricao , pontos, quantidade) => {
    const premio = new Premio({descricao: descricao, pontos: pontos, quantidade : quantidade });
    return premio.save()
}

const atualizar= async (id,premio_novo)=> {
    try{
        
    const premio =Premio.updateOne({_id:new mongoose.Types.ObjectId(id)},{$set:{descricao:premio_novo}});
    
    return premio;

    }
    catch(err){
        return console.error(err);
    }

    
}

const encontrar = async (id)=> {
    try{
        
    const premio =Premio.findOne({_id:new mongoose.Types.ObjectId(id)});
    
    return premio;
    
    }
    catch(err){
        return console.error(err);
    }
}

const remover = async (id)=> {
    try{
    const premio = Premio.deleteOne({_id:new mongoose.Types.ObjectId(id)})
    return premio;
    }
    catch(err){
        return console.error(err);
    }
}


module.exports.criar = criar;

module.exports.atualizar = atualizar;

module.exports.encontrar = encontrar;

module.exports.remover = remover;