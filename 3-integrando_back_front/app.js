
import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/mensagem", (req, res) => {
	res.json(
		{ text: 'Congratulations'},
		{ img: 'https://gq.globo.com/Cultura/Musica/noticia/2021/11/britney-spears-7-musicas-animadas-da-cantora-para-comemorar-sua-liberdade.html'}
	)
})

app.listen(PORT, () => {
	console.log("Servidor funcionando!")
})