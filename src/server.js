import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

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

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})

app.listen(port, () => {
    console.log(`✨ Server started on http://localhost:${port}`)
})