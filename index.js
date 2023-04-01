const mongoose = require('mongoose')

// Utilizando o useNewUrlParser e UnifiedTopoly, para evitar avisos
mongoose.connect('mongodb+srv://Root:1234@cluster0.qnbvwjt.mongodb.net/Trabalho?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database!');
}).catch((error) => {
  console.error('Error connecting to database:', error);
});

const usuarioSchema = new mongoose.Schema({
    nome : String,
    senha : String,
    pontos : Number,
    latitude : String,
    longitude: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

const criaUsuario = new Usuario({
    nome : 'Julia',
    senha: '123',
    pontos : 123,
    latitude : '123.456.789',
    longitude: '123.456.789'
});

criaUsuario.save().then(()=>{
    console.log('Usuario Criado!');
}).catch((error)=>{
    console.error('Erro na criaçao de usuario');
});

const reciclagemSchema = new mongoose.Schema({
    item : String,
    imagem: String,
    peso: String,
    data: Date,
    pontos: String
});

const Reciclagem = mongoose.model('Reciclagem', reciclagemSchema);

const cadastraReciclagem = new Reciclagem({
    item : 'Garrafa',
    imagem: 'foto',
    peso: '64 kg ',
    data: '2023/03/29',
    pontos: '200'
});

cadastraReciclagem.save().then(()=>{
    console.log('Reciclagem registrada!');
}).catch((error)=>{
    console.error('Erro no cadastro da reciclagem');
});

const premioSchema = new mongoose.Schema({
    descricao : String,
    pontos : Number,
    quantidade: Number
});

const Premio = mongoose.model('Premio', premioSchema);

const cadastraPremio = new Premio({
    descricao : 'Iphone',
    pontos : 200,
    quantidade: 200
});

cadastraPremio.save().then(()=>{
    console.log('Premio Cadastrado!');
}).catch((error)=>{
    console.error('Erro no cadastro do premio');
});