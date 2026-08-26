// app - cria a instância do servidor e define middlewares e as rotas a partir do app.use(url, agrupamento de rotas)

import express from "express"
import cors from "cors"

// importar rotasroutes
import loginRoutes from "./src/routes/loginRoutes.js"
import registerRoutes from './src/routes/registerRoutes.js'
import usersRoutes from "./src/routes/usersRoutes.js"

// inicialização
const app = express()
app.use(cors())
app.use(express.json())

// rotas
app.use("/login", loginRoutes)
app.use("/register", registerRoutes)
app.use("/users", usersRoutes)


export default app;