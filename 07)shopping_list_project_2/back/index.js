
// const express = require("express")
import express from "express";
import cors from "cors"

const app = express()

// cors vem primeiro
app.use(cors())
app.use(express.json())

// itens
const itens = [
	{name:"Inicial", value:0, soldTo:"un", quantily:0}, // forma simplificada de resolver problema visual e de lógica, esse item não consegue ser apagado e está como fantasma na aplicação, forçando na prática que o index iniciar com 0 não atrapalhe na experiência do usuário
	{name:"Arroz", value:5, soldTo:"kg", quantily:2},
	{name:"Feijão", value:8, soldTo:"kg", quantily:1},
	{name:"Ovo", value:10, soldTo:"duzia", quantily:1},
	{name:"Carne", value:35, soldTo:"kg", quantily:0.5},
]


// get
app.get("/user", (req, res) => {
	return res.status(200).json(itens)
})


// post
app.post("/user", (req, res) => {
	const { name, value, soldTo, quantily } = req.body;
	if(!name || !value, !soldTo, !quantily){
		return res.status(400).json({erro:"Erro ao adicionar itens, dados incompletos"})
	}

	const content = {name, value, soldTo, quantily}
	itens.push(content)
	return res.status(201).json({message: "Novo item adicionado com sucesso", newItem: content})
})


// put
app.put("/user/:id", (req, res) => {
	
	const {id} = req.params;
	if(!id || id <= 0 || id > itens.leght) return

	const data = req.body;
	itens[id] = data;
	
	return res.status(200).json({message: "Item atualizado com sucesso", item: itens[id]})
	/* 
		// controlado
		itens[id] = {...item, name:data.name, value:data.value, soldTo:data.soldTo, quantily:data.quantily} 


		// map
		itens = itens.map((item, index) => {
			if(index === id){
				return {...item, name:data.name, value:data.value, soldTo:data.soldTo, quantily:data.quantily} 
			}
			else {
				return item
			}
		})
	*/
})

app.delete("/user/:id", (req, res) => {
	const {id} = req.params;
	if(!id || id <= 0 || id > itens.length) return
	itens.splice(id, 1)
	return res.status(204).end()
})

app.listen(3000, () => {
	console.log("Funcionando")
})