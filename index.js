const mongoose = require('mongoose')

const express = require("express")

const usuarioRoute = require("./route/usuario")
const reciclagemRoute = require("./route/reciclagem")
const premioRoute = require("./route/premio")

const app = express()

app.use(usuarioRoute)
app.use(reciclagemRoute)
app.use(premioRoute)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use((req, res) => {
    res.status(404).json({ msg: "Endpoint inexistente!" })
})

const URL = "mongodb+srv://Root:1234@cluster0.qnbvwjt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL).then(() => {
    app.listen(3000, () => console.log("Iniciando o servidor"))
}).catch((err) => console.log(err))