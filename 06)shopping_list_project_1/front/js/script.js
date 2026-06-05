let finalValue = 0

async function getData() {

	const contentContainer = document.querySelector("#contentContainer")
	const finalValueString = document.querySelector("#finalValueString")
	contentContainer.innerHTML = ""

	const res = await fetch("http://localhost:3000/")
	const data = await res.json() 

	data.forEach((item) => {

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

		const row = document.createElement("tr")
		row.innerHTML = `
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

getData()