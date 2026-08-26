
// chama o app e coloca os servidor para escutar as requisições

import app from "./app.js"
import connectDatabase from "./src/config/database.js"
import "dotenv/config"


const PORT = 3000;
connectDatabase()

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})
