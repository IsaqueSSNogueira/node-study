

import { addItem, editItem, deleteItem } from './actions.js'
import { getData } from './getData.js'
const clearButton = document.querySelector("#clearButton")
const deleteButton = document.querySelector("#deleteButton")
const editButton = document.querySelector("#editButton")
const addButton = document.querySelector("#addButton")

// inputs
const item = document.querySelector("[data-type=inputItem]")
const preco = document.querySelector("[data-type=inputPreco]")
const vendidoA = document.querySelector("[data-type=inputVendidoA]")
const quantidade = document.querySelector("[data-type=inputQuantidade]")
const inputRef = document.querySelector("#inputRef")


// clear
const update = () => {
	getData()
	item.value = ""
	preco.value = null
	vendidoA.value = "un"
	quantidade.value = null
}

// verify
const verifyInput = () => {
	return !item.value || !preco.value || !vendidoA.value || !quantidade.value
}

// capture updated date
const captureUpdatedData = async () => {
	const res = await fetch("http://localhost:3000/")
	return await res.json() 
}





// events
inputRef.addEventListener("input", async (event) => {

	// number ref
	const valueRef = Number(event.target.value)

	// data
	const data = await captureUpdatedData()
	const itemData = data[valueRef]


	// conditional
	if(Number.isNaN(valueRef) || valueRef > data.length || valueRef === 0 || !itemData){
		return
	}
	else{
		item.value = itemData.nome
		preco.value = itemData.valor
		vendidoA.value = itemData.vendidoA
		quantidade.value = itemData.quantidade
	}
})

addButton.addEventListener("click", async () => {
	const isBlock = verifyInput
	()
	if(isBlock){
		return
	}
	else{
		addItem()	
		getData()
	}

})

editButton.addEventListener("click", async () => {
	const isBlock = verifyInput()
	if(isBlock){
		return
	}
	else{
		await editItem()	
		await getData()
	}
})


deleteButton.addEventListener("click", async () => {
	await deleteItem()
	await getData()
})

clearButton.addEventListener("click", () => {
	update()
})




getData()