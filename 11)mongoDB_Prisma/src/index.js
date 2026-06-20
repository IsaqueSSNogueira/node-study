import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.json({message: "Servidor rodando"})
})


app.listen(3000, () => {
    console.log("Rodando servidor")
})
