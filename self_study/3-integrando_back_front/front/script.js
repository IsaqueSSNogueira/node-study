

async function buscarMensagem () {

	const resposta = await fetch('http:localhost:3000/mensagem')
	const dados = await resposta.json()
}

buscarMensagem()