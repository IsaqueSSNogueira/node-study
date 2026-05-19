
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

console.log(users)

// routes


// register
app.post("/register", (req, res) => {
	const {inputUser, inputPassword} = req.body
	
	const existUser = users.some((item) => {
		return item.user === inputUser
	})

	if(existUser){
		return res.status(409).json({
			message: "Usuário já existe"
		})
	}
	// if everything goes well
	users.push({user: inputUser, password:inputPassword})
	return res.status(201).json({
		message: "Usuário criado"
	})
})


// login
app.post("/login", (req, res) => {
	const {inputUser, inputPassword} = req.body;
	const foundUser = users.find((item) => {
		return item.user === inputUser || item.password === inputPassword
	})

	if(!foundUser){
		return res.status(404).json({
			message:"Usuário ou senha incorretos"
		})
	}
	return res.status(200).json({
		message: "Login efetuado",
		user:foundUser.user,
	})
})



app.listen(3000, () => {
	console.log("Funcionando ;)")
})