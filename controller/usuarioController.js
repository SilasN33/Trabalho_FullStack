const mongoose = require('mongoose');
const Usuario = require('../model/usuario');

const criar = async (nome , senha, pontos, latitude, longitude) => {
    const usuario = new Usuario({nome: nome, senha: senha, pontos : pontos, latitude: latitude, longitude:longitude });
    return await usuario.save();
}

const atualizar= async (id,novo_nome)=> {
    try{
        
    const usuario =Usuario.updateOne({_id:new mongoose.Types.ObjectId(id)},{$set:{nome:novo_nome}});
    
    return usuario;

    }
    catch(err){
        return console.error(err);
    }

    
}

const encontrar= async (id)=> {
    try{
        
    const usuario =Usuario.findOne({_id:new mongoose.Types.ObjectId(id)});
    
    return usuario;
    
    }
    catch(err){
        return console.error(err);
    }
}

const remover = async (id)=> {
    try{
    const usuario = Usuario.deleteOne({_id:new mongoose.Types.ObjectId(id)})
    return usuario;
    }
    catch(err){
        return console.error(err);
    }
}


module.exports.criar = criar;

module.exports.atualizar = atualizar;

module.exports.encontrar = encontrar;

module.exports.remover = remover;