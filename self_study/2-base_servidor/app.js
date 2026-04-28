// aula 3, 4

// importando a biblioteca que vai facilitar tudo hehe
import express from 'express';

// criando uma aplicação express (um servidor)
const app = express()
const PORT = 3000

// middleware interpretador de dados recebidos
app.use(express.json())


app.get("/", (req, res) => {
  res.send("Servidor rodando, parabéns Isaque 🚀😁")
})



app.listen(PORT, () => {
  console.log("Servidor funcionando, parabéns Isaque!! ;)")
})