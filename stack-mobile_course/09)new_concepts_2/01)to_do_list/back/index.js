
// import
import express from "express"
import cors from "cors"
import { v4 as uuidv4 } from 'uuid'; // id


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
	{
	 id:uuidv4(), // crypto.randomUUID();
	 user: "Isaque", 
	 password:"123456",
	 tasks:[
	 	{id:uuidv4(), text:"Correr", description:"Correr as 7h da manhã",status:false},
	 	{id:uuidv4(), text:"Estudar", description:"Ao menos 1h diária",status:false},
	 	{id:uuidv4(), text:"Trabalhar", description:"Sair as 13:30",status:false},
	 ]
	}
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
	users.push({id:uuidv4(), user: inputUser, password:inputPassword})
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
		id:foundUser.id,
	})
})





// get data
app.get("/data/:id", (req, res) => {

	const id = req.params.id
	const userData = users.find(item => item.id = id)
	const returnData = {user:userData.user, tasks:userData.tasks}
	if(returnData){
		res.json(returnData)
	}

})



app.listen(3000, () => {
	console.log("Funcionando ;)")
})