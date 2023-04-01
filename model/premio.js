const mongoose = require('mongoosed')

const premioSchema = new mongoose.premioSchema({

    descricao : String,

    pontos : Number,

    quantidade : Number,

});

const Premio = mongoose.model('Premio', premioSchema);

module.exports = Premio;