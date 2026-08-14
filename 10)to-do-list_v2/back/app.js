
import express from "express"
import cors from "cors"
import users from "./src/data/usersData.js"

// routes
import loginRoutes from "./src/routes/loginRoutes.js"
import registerRoutes from "./src/routes/registerRoutes.js"
import usersRoutes from "./src/routes/usersRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())
console.log(users)

app.use("/login", loginRoutes)
app.use("/register", registerRoutes)
app.use("/users", usersRoutes)


export default app;
