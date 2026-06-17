
import { v4 as uuidv4 } from "uuid"

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

export default users; 