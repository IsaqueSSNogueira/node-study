let finalValue = 0
export let data = []

export async function getData() {

	const contentContainer = document.querySelector("#contentContainer")
	const finalValueString = document.querySelector("#finalValueString")
	contentContainer.innerHTML = ""

	const res = await fetch("http://localhost:3000/")
	data = await res.json() 
	finalValue = 0


	data.forEach((item, index) => {

		// item inicial
		if(index === 0) return

		// quantidade
		let quantily = "" 
		if(item.vendidoA === "kg"){
			quantily = item.quantidade < 1 
				? `${item.quantidade * 1000} gramas` 
				: `${item.quantidade} kg`
		} else {
			quantily = `${item.quantidade} ${item.vendidoA}`
		}

		// valor * quantidade
		const valueTotal = (item.valor * item.quantidade).toFixed(2)

		// soma 
		finalValue += item.valor * item.quantidade

		// row
		const row = document.createElement("tr")
		row.innerHTML = `
			<td>${index}</td>
			<td>${item.nome}</td>
			<td>${item.valor} reais</td>
			<td>${item.vendidoA}</td>
			<td>${quantily}</td>
			<td>${valueTotal} reais</td>
		`
		contentContainer.appendChild(row)
	})

	finalValueString.innerHTML = `${finalValue.toFixed(2)} reais`
}

