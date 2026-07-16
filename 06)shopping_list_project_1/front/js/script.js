let finalValue = 0


async function getData() {

	const contentContainer = document.querySelector("#contentContainer")
	const finalValueString = document.querySelector("#finalValueString")
	contentContainer.innerHTML = ""

	const res = await fetch("http://localhost:3000/")
	const data = await res.json() 

	data.forEach((item) => {

		// quantidade
		let quantily = 0; 
		if(item.soldTo === "kg"){
			quantily = item.quatily < 1 
				? `${item.quantily * 1000} gramas` 
				: `${item.quantily} kg`
		} else {
			quantily = `${item.quantily} ${item.soldTo}`
		}

		// valor * quantidade
		const totalValue = (item.value * item.quantily).toFixed(2)

		// soma 
		finalValue += item.value * item.quantily

		const row = document.createElement("tr")
		row.innerHTML = `
			<td>${item.name}</td>
			<td>${item.value} reais</td>
			<td>${item.soldTo}</td>
			<td>${quantily}</td>
			<td>${totalValue} reais</td>
		`
		contentContainer.appendChild(row)
	})

	finalValueString.innerHTML = `${finalValue.toFixed(2)} reais`
}

getData()