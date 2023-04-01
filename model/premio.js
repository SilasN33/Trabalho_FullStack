const mongoose = require('mongoose')

const premioSchema = mongoose.Schema({

    descricao : {type: String},

    pontos : {type : Number},

    quantidade : {type: Number},

});

const Premio = mongoose.model("Premio", premioSchema)

module.exports = Premio;