
// const express = require("express")
import express from "express";
import cors from "cors"

const app = express()

// cors vem primeiro
app.use(cors())
app.use(express.json())

// itens
const itens = [
	{nome:"Inicial", valor:0, vendidoA:"un", quantidade:0},
	{nome:"Arroz", valor:5, vendidoA:"kg", quantidade:2},
	{nome:"Feijão", valor:8, vendidoA:"kg", quantidade:1},
	{nome:"Ovo", valor:10, vendidoA:"duzia", quantidade:1},
	{nome:"Carne", valor:35, vendidoA:"kg", quantidade:0.5},
]

app.get("/", (req, res) => {
	res.json(itens)
})

app.post("/", (req, res) => {
	const content = req.body;
	itens.push(content)
	res.json({newItem: content})
})

app.put("/:id", (req, res) => {
	const id = Number(req.params.id);
	const data = req.body;
	itens[id] = data;
	res.send({message: "Item atualizado com sucesso", item: itens[id]})
	/* 
		// controlado
		itens[id] = {...item, nome:data.nome, valor:data.valor, vendidoA:data.vendidoA, quantidade:data.quantidade} 


		// map
		itens = itens.map((item, index) => {
			if(index === id){
				return {...item, nome:data.nome, valor:data.valor, vendidoA:data.vendidoA, quantidade:data.quantidade} 
			}
			else {
				return item
			}
		})
	*/
})

app.delete("/:id", (req, res) => {
	const id = req.params.id;
	if(id > itens.length || id <= 0 || !id) return
	itens.splice(id, 1)
})

app.listen(3000, () => {
	console.log("Funcionando")
})