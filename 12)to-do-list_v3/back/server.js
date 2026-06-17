
// chama o app e coloca os servidor para escutar as requisições

 

import app from "./app.js"

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})
