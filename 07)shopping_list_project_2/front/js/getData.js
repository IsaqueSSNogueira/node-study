
let finalValue = 0

export async function getData() {

	const contentContainer = document.querySelector("#contentContainer")
	const finalValueString = document.querySelector("#finalValueString")
	contentContainer.innerHTML = ""
	finalValue = 0

	const res = await fetch("http://localhost:3000/user")
	const data = await res.json() 	

	data.forEach((item, index) => {

		// initial item
		if(index === 0) return;

		// quantily
		let quantily = ""; 
		if(item.soldTo === "kg"){
			quantily = item.quantily < 1 
				? `${item.quantily * 1000} gramas` 
				: `${item.quantily} kg`
		} else {
			quantily = `${item.quantily} ${item.soldTo}`
		}

		// value * quantily
		const totalValue = (item.value * item.quantily).toFixed(2)

		// add up
		finalValue += item.value * item.quantily

		// appendichild
		const row = document.createElement("tr")
		row.innerHTML = `
			<td>${index}</td>
			<td>${item.name}</td>
			<td>${item.value} reais</td>
			<td>${item.soldTo}</td>
			<td>${quantily}</td>
			<td>${totalValue} reais</td>
		`
		contentContainer.appendChild(row)
	})

	finalValueString.textContent = `${finalValue.toFixed(2)} reais`
}

