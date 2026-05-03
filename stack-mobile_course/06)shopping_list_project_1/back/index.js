
// const express = require("express")
import express from "express";
import cors from "cors"

const app = express()

// cors vem primeiro
app.use(cors())
app.use(express.json())

// itens
const itens = [
	{nome:"Arroz", valor:5, vendidoA:"kg", quantidade:2},
	{nome:"Feijão", valor:8, vendidoA:"kg", quantidade:1},
	{nome:"Ovo", valor:10, vendidoA:"duzia", quantidade:1},
	{nome:"Carne", valor:35, vendidoA:"kg", quantidade:0.5},
]

app.get("/", (req, res) => {
	res.json(itens)
})

app.listen(3000, () => {
	console.log("Funcionando")
})