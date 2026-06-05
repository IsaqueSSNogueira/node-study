
import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/register", routesRegister)
app.use("/login", routesLogin)
app.use("/tasks", routesTasks)


export default app;