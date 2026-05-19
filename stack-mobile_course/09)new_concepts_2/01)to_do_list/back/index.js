
// import
import express from "express"
import cors from "cors"
// initialization
const app = express()
app.use(cors());
app.use(express.json())


// base
app.get("/", (req, res) => {
	res.send("Ok")
})


// users
let users = [
	{user: "Isaque", password:"123456"}
]


// routes

app.get("/register", (req, res) => {

})

app.post("/register", (req, res) => {
	const {user, password} = req.body
	
	const existUser = users.some((item) => {
		return item.user === user
	})

	if(existUser){
		return res.status(409).json({
			message: "Usuário já existe"
		})
	}

	// if everything goes well
	users.push({user, password})
	return res.status(201).json({
		message: "Usuário criado"
	})

})



app.listen(3000, () => {
	console.log("Funcionando ;)")
})