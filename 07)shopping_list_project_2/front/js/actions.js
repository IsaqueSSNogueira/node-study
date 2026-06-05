
const inputRef = document.querySelector("#inputRef")
const item = document.querySelector("[data-type=inputItem]")
const preco = document.querySelector("[data-type=inputPreco]")
const vendidoA = document.querySelector("[data-type=inputVendidoA]")
const quantidade = document.querySelector("[data-type=inputQuantidade]")

export async function addItem(){

	const nomeValue = item.value;
	const precoValue = Number(preco.value);
	const vendidoAValue = vendidoA.value
	const quantidadeValue = Number(quantidade.value);

	await fetch("http://localhost:3000/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ nome: nomeValue, valor: precoValue, vendidoA: vendidoAValue, quantidade: quantidadeValue })
	})
}


export async function editItem(){
	const refValue = Number(inputRef.value)
	const nomeValue = item.value;
	const precoValue = Number(preco.value);
	const vendidoAValue = vendidoA.value
	const quantidadeValue = Number(quantidade.value);

	return await fetch(`http://localhost:3000/${refValue}`, {
		method: "PUT",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({nome: nomeValue, valor: precoValue, vendidoA: vendidoAValue, quantidade: quantidadeValue})
	})
}


export async function deleteItem(){
	const refValue = Number(inputRef.value)
	return await fetch(`http://localhost:3000/${refValue}`, {
		method:"DELETE"		
	})
}



