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

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})