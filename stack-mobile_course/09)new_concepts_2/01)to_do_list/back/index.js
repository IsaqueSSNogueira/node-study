
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
	 	{id:uuidv4(), text:"Correr", description:"Correr as 7h da manhã",completed:false},
	 	{id:uuidv4(), text:"Estudar", description:"Ao menos 1h diária",completed:false},
	 	{id:uuidv4(), text:"Trabalhar", description:"Sair as 13:30",completed:false},
	 ]
	},
	{
	 id:uuidv4(), // crypto.randomUUID();
	 user: "Vitor", 
	 password:"12345",
	 tasks:[
	 	{id:uuidv4(), text:"Programar", description:"Backend",completed:false},
	 	{id:uuidv4(), text:"Assistir um anime", description:"Rockie No Bockie",completed:false},
	 	{id:uuidv4(), text:"Ir para escola", description:"Bocchi The Rock!",completed:true},
	 ]
	},
]

console.log(users)

/* routes */
 
// register
app.post("/register", (req, res) => {
	const {inputUser, inputPassword} = req.body
	
	const existUser = users.some((user) => {
		return user.user === inputUser
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
		return item.user === inputUser && item.password === inputPassword
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
	const userData = users.find(user => user.id === id)
	const returnData = {user:userData.user, tasks:userData.tasks}
	if(returnData){
		res.json(returnData)
	}
})


// new task
app.post("/tasks/:id", (req, res) => {

  const id = req.params.id
  const newTask = req.body


  const user = users.find(user => user.id === id)

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" })
  }

  const task = {
    id: uuidv4(),
    text: newTask.value,
    description: "",
    completed: false
  }
  user.tasks.push(task)

  return res.status(201).json({
    message: "Tarefa criada",
    task
  })
})



// update
app.patch("/tasks/:id/:idTask", (req, res) => {

	const {id, idTask} = req.params;
	const { text, description, isChecked } = req.body

	const user = users.find(user => user.id === id)

	if(!user){
		return res.status(404).json("Usuário não encontrado")
	}

	const task = user.tasks.find(item => item.id === idTask) 

	if(!task){
		return res.status(404).json({ message: "Tarefa não encontrada"})
	} 


	if(text !== undefined) task.text = text;
	if(description !== undefined) task.description = description;
	if(isChecked !== undefined) task.completed = isChecked;


	// return
	let messageReturn = ""
	if(text !== undefined){
		messageReturn = `Nome tarefa atualizado: ${text}`
	}
	else if(description !== undefined){
		messageReturn = `Descrição atualizada: ${description}`
	}
	else if(isChecked !== undefined){
		messageReturn = isChecked ? "Tarefa marcada" : "Tarefa desmarcada" 
	}


	return res.status(200).json({
		message: `${messageReturn}`,
		status:true,
		task 
	})
})


// delete
app.delete("/tasks/:id/:idTask", (req, res) => {

	const {id, idTask} = req.params

	const user = users.find(item => item.id === id)

	if(!user) return res.status(404).json({ message: "Usuário não encontrado" })

	const taskIndex = user.tasks.findIndex(item => item.id === idTask)

	if (taskIndex === -1) {return res.status(404).json({ message: "Tarefa não encontrada" })}

	user.tasks.splice(taskIndex, 1)

 	return res.json({message:"Tarefa deleta com sucesso"})
})


app.listen(3000, () => {
	console.log("Funcionando ;)")
})