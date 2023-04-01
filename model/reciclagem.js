const mongoose = require('mongoose')

const reciclagemSchema = mongoose.Schema({

    item : {type: String},

    imagem : {type : String},

    peso : {type : Number},

    data : {type: Number},

    pontos: { type: Number},
    
    usuario: { type: mongoose.Types.ObjectId, required: true, ref: "Usuario" },


});

const Reciclagem = mongoose.model("Reciclagem", reciclagemSchema)

module.exports = Reciclagem;