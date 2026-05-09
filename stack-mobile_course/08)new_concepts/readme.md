

# 🌆 Novos conceitos 1 (FRONTEND)

- "Parte 1" foca no front, em consumo de API.


## .then vs async / await 

### .then 

```
fetch(url)
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.log(err))
```

- Como funciona: Cada `.then` pega o resultado do anterior e `.catch` trata erro. É um encadeamento de Promises
- Problemas: Fica difícil de ler quando cresce, um “callback hell” disfarçado (funções dentro de funções);


### async / await

```
try {
	const res = await fetch(url)
	const data = await res.json()
} catch (err) {
	console.log(err)
}
```
- `await` pausa a execução até a Promise resolver;
- `try/catch` trata erro;
- Parece código síncrono.

### try / catch

- Usado tanto no front (substituindo o catch do .the) quanto no back (sendo essencail, evita quebra do servidor e controlando resposta de erro);

- Exemplo no front:
```
async function(){	
	try {
		const res = await fetch(url)
		const data = await res.json()
	} catch (err) {
		console.log("Erro na requisição")
	}
}
```
<br>


- Exemplo no back:
```
app.put("/:id", async (req, res) => {
	try {
		const id = Number(req.params.id)
		const data = req.body

		itens[id] = { ...itens[id], ...data }

		res.json(itens[id])
	} catch (error) {
		res.status(500).json({ error: "Erro ao atualizar item" })
	}
})
```
