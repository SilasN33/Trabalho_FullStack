const mongoose = require('mongoose');
const usuarioController = require ('./controller/usuarioController');

const uri = "mongodb+srv://Root:1234@cluster0.qnbvwjt.mongodb.net/Trabalho?retryWrites=true&w=majority";

mongoose.connect(uri).then(async (conn) => {

    //const criar_usuario = await usuarioController.criar('teste3000', '123', 23, "lat", "long");
    //console.log('Usuario Criado!' + criar_usuario)

    // const atualizar = await usuarioController.atualizar("64279bbf3a93f92929e8618b", 'Joao')
    //console.log('Usuario Alterado' )

    //const encontrar = await usuarioController.encontrar("64279bbf3a93f92929e8618b")
    // console.log("Resultado encontrado" + encontrar)

    const remove_usuario = await usuarioController.remover("64279df8985dba3986c98f47")
    console.log('Usuario Removido')

})