
/* functions */
import { addItem, editItem, deleteItem } from './actions.js'
import { getData } from './getData.js'

/* elements */
// buttons
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


// clear everything
const update = () => {
	getData()
	item.value = ""
	preco.value = null
	vendidoA.value = "un"
	quantidade.value = null
	inputRef.value = null
}

// verify
const verifyInput = () => {
	return !item.value || !preco.value || !vendidoA.value || !quantidade.value
}

// capture updated date
const captureUpdatedData = async () => {
	const res = await fetch("http://localhost:3000/user")
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
	if(Number.isNaN(valueRef) || valueRef > data.length || valueRef <= 0 || !itemData){
		update()
		return
	}
	else{
		item.value = itemData.name
		preco.value = itemData.value
		vendidoA.value = itemData.soldTo
		quantidade.value = itemData.quantily
	}
})

addButton.addEventListener("click", async () => {
	const isBlock = verifyInput()
	if(isBlock){
		return
	}
	else{
		await addItem()	
		update()	
	}

})

editButton.addEventListener("click", async () => {
	const isBlock = verifyInput()
	if(!inputRef.value) return

	if(isBlock){
		return
	}
	else{
		await editItem()
		update()	
	}
})


deleteButton.addEventListener("click", async () => {
	if(!inputRef.value) return
	await deleteItem()
	update()	
})

clearButton.addEventListener("click", () => {
	update()
})

getData()