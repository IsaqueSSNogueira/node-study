
// const express = require("express") -> CommonJS
// configura no package,json -> "type": "module"
import express from "express";

// instância da aplicação
const app = express()
const PORT = 3000

// rota http tipo get, gerencia pedidos, essa em especifico da rota "/", com seus atributos req (dados do pedido) e res (retorno ao cliente)
app.get("/", (req, res) => {
	// resposta simples, futuramente com a requisição feita do front, vou incrementar um json bacana
	res.send("Eae Isaque, você é foda!")
})

// engata o servidor para ouvir as requisições
app.listen(PORT, () => {
	console.log("Rodando...")
})