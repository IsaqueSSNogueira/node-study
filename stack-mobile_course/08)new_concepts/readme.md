

# 🌆 Novos conceitos 1 (FRONTEND)

- "Parte 1" foca no front, em consumo de API. Aqui veremos utilização do "`.then` vs `async/await`"" (diferenças, motivos pelo menos uso do .then e crescente do async/await) e tbm sobre `try/catch`, para passar a implementa-lo nos códigos mantendo-os mais organizados e com boas práticas em dia. 
- Como projetos, vou desenvolver alguns simples, focando em testar pontos visitados aqui e tendo com base de experimentação API's externas. Quando eu estudei desenvolvimento web pela primeira vez, não tive tanto contato com implementação de API's por se tratar de projetos que eu compreendia bem o funcionamento, esperando pelo momento em que eu estudasse backend para visitar esses conceitos; 
- Agora que estou de fato aprendendo backend, tenho base e consigo compreender melhor o que está acontecendo por "de trás dos panos". Poderia simplesmente pular essa parte e já focar na implementação de servidor em banco de dados externo, fazer hospedagem, mas achei importante voltar a base, entender conceitos fundamentais e experimentar fazer projetos mais simples em construção, mas cada um com propósito;
- Esse projetos não focam em lógica complexa e nem UI, mas em saber bem receber dados de uma API e os utiliza-los de uma forma eficiente e produtiva. São projetos rápidos para experimentação. Projetos:
1. Visualizador de imagens de gatos. Vindas de uma API, troca a imagem quando é clicado no botão "Change IMG 🧡";
2. Relógios digitais. Busca horários de países definidos e renderiza fuso-horário local "ao vivo".


<br>

## 🔄 .then vs async / await 

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


<br>

### ⁉ try / catch

- Usado tanto no front (substituindo o catch do .the) quanto no back (sendo essencial, evita quebra do servidor e controlando resposta de erro);

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
