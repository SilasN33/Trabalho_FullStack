const mongoose = require('mongoose');
const Reciclagem = require('../model/reciclagem');

const criar = async (item , imagem, peso, data, pontos, usuario) => {
    const reciclagem = new Reciclagem({item: item, imagem: imagem, peso : peso, data: data, pontos:pontos, usuario: usuario });
    return await reciclagem.save();
}

const atualizar= async (id,novo_item)=> {
    try{
        
    const reciclagem =Reciclagem.updateOne({_id:new mongoose.Types.ObjectId(id)},{$set:{item:novo_item}});
    
    return reciclagem;

    }
    catch(err){
        return console.error(err);
    }

    
}

const encontrar= async (id)=> {
    try{
        
    const reciclagem =Reciclagem.findOne({_id:new mongoose.Types.ObjectId(id)});
    
    return reciclagem;
    
    }
    catch(err){
        return console.error(err);
    }
}

const remover = async (id)=> {
    try{
    const reciclagem = Reciclagem.deleteOne({_id:new mongoose.Types.ObjectId(id)})
    return reciclagem;
    }
    catch(err){
        return console.error(err);
    }
}


module.exports.criar = criar;

module.exports.atualizar = atualizar;

module.exports.encontrar = encontrar;

module.exports.remover = remover;