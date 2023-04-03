const mongoose = require('mongoose');
const usuarioController = require ('./controller/usuarioController');
const premioController = require ('./controller/premioController');
const reciclagemController = require ('./controller/reciclagemController');

const uri = "mongodb+srv://Root:1234@cluster0.qnbvwjt.mongodb.net/Trabalho?retryWrites=true&w=majority";

mongoose.connect(uri).then(async (conn) => {

    // Usuario ---->
    const criar_usuario = await usuarioController.criar('BlackMaster', '123', 23, "lat", "long");
    console.log('Usuario Criado!' + criar_usuario)

    // const atualizar = await usuarioController.atualizar("64279bbf3a93f92929e8618b", 'Joao');
    //console.log('Usuario Alterado' )

   // const encontrar = await usuarioController.encontrar("64279bbf3a93f92929e8618b");
    // console.log("Resultado encontrado" + encontrar)

    //const remove_usuario = await usuarioController.remover("64279df8985dba3986c98f47");
    //console.log('Usuario Removido')

      // Reciclagem ---->
    const criar_reciclagem = await reciclagemController.criar('cocoa', 'img', 111, 111 , 111, '6424b7e5b136acadeab1c02c');
    console.log('Reciclagem Registrada!' + criar_reciclagem)

    //const atualizar = await reciclagemController.atualizar("6424b7e5b136acadeab1c02d", 'Latinha');
    //console.log('Item Reciclado  Alterado' )

    //const encontrar = await reciclagemController.encontrar("6424b7e5b136acadeab1c02d");
    // console.log("Reciclagem encontrada:" + encontrar)

    //const remove_reciclagem = await reciclagemController.remover("6424b7e5b136acadeab1c02d");
    //console.log('Reciclagem Removida')


    // Premio ---->
    const criar_premio = await premioController.criar('premio duck', 33, 21);
    console.log('Premio Criado', + criar_premio)

    //const atualiza_premio = await premioController.atualizar('64283a598bf9f21f6eeba60f', 'Mac Book');
    //console.log('Premio Alterado' + atualiza_premio)

    
    //const encontra_premio = await premioController.encontrar('6424b9e1eb6446f125a7a825');
   // console.log('Premio encontrado' + encontra_premio)

    //const remove_premio = await premioController.remover("6424b9e1eb6446f125a7a825");
    //console.log('Premio Removido')

    
})