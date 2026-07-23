
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

	try{
		const res = await fetch("http://localhost:3000/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ name: nomeValue, value: precoValue, soldTo: vendidoAValue, quantily: quantidadeValue })
		})

		if(!res.ok){
			throw new Error("Erro ao adicionar item")
		}

		const data = await res.json();
		console.log(data)

	} catch(err){
		console.error(err)
	}

}


export async function editItem(){
	const refValue = Number(inputRef.value)
	const nomeValue = item.value;
	const precoValue = Number(preco.value);
	const vendidoAValue = vendidoA.value
	const quantidadeValue = Number(quantidade.value);

	try{
		const res = await fetch(`http://localhost:3000/user/${refValue}`, {
					method: "PUT",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({name: nomeValue, value: precoValue, soldTo: vendidoAValue, quantily: quantidadeValue})
		})

		if(!res.ok){
			throw new Error("Erro ao atualizar item")
		}
		
		const data = await res.json();
		console.log(data)

	}catch(err){
		console.error(err)
	}	
}


export async function deleteItem(){
	const refValue = Number(inputRef.value)
	return await fetch(`http://localhost:3000/user/${refValue}`, {
		method:"DELETE"		
	})
}



