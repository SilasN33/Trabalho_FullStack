const express = require("express")
const bodyParser = require("body-parser")
const ReciclagemController = require("../controller/reciclagemController")
const { body, validationResult, matchedData } = require("express-validator")
const router = express.Router()

router.use(bodyParser.json())

router.post('/reciclagem',
    body('item').notEmpty().isString().withMessage("Item inválido"),
    body('imagem').isString().withMessage("A imagem é em string"),
    body('peso').isNumeric().withMessage("Pesos são apenas números"),
    body('data').isDate().withMessage("Data inválida"),
    body('pontos').isNumeric().withMessage("Pontos são apenas números"),
    body('usuario').isString().withMessage("Usuario não existe"),
    async(req, res) => {
        console.log(matchedData(req));
        const validacao = validationResult(req).array();
        if (validacao.length === 0) {
            const novo = await ReciclagemController.criar(req.body.item, req.body.imagem, req.body.peso, req.body.data, req.body.pontos, req.body.usuario);
            res.json({ resultado: 'Reciclagem criado!', reciclagem: novo });
        } else {
            res.status(401).json(validacao);
        }
    })

router.put('/reciclagem/novaimagem/:id', async(req, res) => {
    const atualizar = await ReciclagemController.atualizar(req.params.id, req.body.img)
    if (atualizar) {
        res.json({ resultado: 'Imagem alterada com sucesso!', reciclagem: atualizar });
    } else res.status(400).json({ resultado: 'Problemas para alterar a imagem' });
})

router.get('/reciclagem/:id', async(req, res) => {
    const consulta = await ReciclagemController.encontrar(req.params.id)
    if (consulta) {
        res.json({ resultado: 'Consulta realizada com sucesso!', reciclagem: consulta });
    } else res.status(400).json({ resultado: 'O item não existe ou id incorreto' });
})

router.get('/reciclagens', async(req, res) => {
    const todos = await ReciclagemController.readAny()
    res.json(todos)
})


router.put('/reciclagem/deletar/:id', async(req, res) => {
    const deletar = await ReciclagemController.remover(req.params.id)
    if (deletar) {
        res.json({ resultado: 'Item deletado!' });
    } else res.status(400).json({ resultado: 'Item não identificado' });
})

module.exports = router;