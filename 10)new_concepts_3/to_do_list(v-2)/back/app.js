
// cria a instância do servidor e define middlewares e as rotas a partir do app.use(url, agrupamento de rotas)

import express from "express"
import cors from "cors"

// routes
import registerRoutes from "src/routes/registerRoutes"
import loginRoutes from "src/routes/loginRoutes"
import usersRoutes from "src/routes/userRoutes"

const app = express()
app.use(cors())
app.use(express.json())

// app.use("/register", registerRoutes)
// app.use("/login", loginRoutes)
// app.use("users", usersRoutes)
app.use("/", () => console.log("HI"))

export default app;