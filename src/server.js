import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const guloseimas = [
    {
        id: 1,
        nome: "Trufa",
        preco: 8.50,
    },
    {
        id: 2,
        nome: "Brigadeiro",
        preco: 5.0,
    },
    {
        id: 3,
        nome: "Bomba de chocolate",
        preco:6.0,
    }
]

const filmesMarcantes = [
    {
        id: 1001,
        titulo: "Homem de ferro",
        genero: "Ação",
        emCartaz: false
    },
    {
        id: 1002,
        titulo: "Shrek",
        genero: "Animação",
        emCartaz: false
    },
    {
        id: 1003,
        titulo: "Deadpool & Wolverine",
        genero: "Ação",
        emCartaz: true
    }
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
})

app.get("/doces", (req, res) => {
    return res.status(200).send(guloseimas)
})

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})

app.listen(port, () => {
    console.log(`✨ Server started on http://localhost:${port}`)
})