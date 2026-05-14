
const urlBase = "https://api.api-ninjas.com/v1/worldtime?timezone="
const urlParams = ["America/Sao_Paulo", "America/New_York","Europe/London", "Asia/Tokyo"]
const apiKey = "HqKkzWfLhs07O2oMzWMhNx2Ur6JNhdMV4rrW6SgV"

```
Vou manter a apiKey exposta porque:
- é projeto de estudo 
- API gratuita 
- sem dados sensíveis 
- sem cobrança 

...mas sei da importância de preserva-la em certos contextos 👍
```

const clocks = {
  "America/Sao_Paulo": document.getElementById("clock-sp"),
  "America/New_York": document.getElementById("clock-ny"),
  "Europe/London": document.getElementById("clock-lon"),
  "Asia/Tokyo": document.getElementById("clock-tok"),
};

// clockTime.textContent = `${}`;

const getTimeZone = async () => {

	/* testing .then()
	fetch(`https://api.api-ninjas.com/v1/worldtime?timezone=Europe/London`, {headers:{"X-Api-Key": "HqKkzWfLhs07O2oMzWMhNx2Ur6JNhdMV4rrW6SgV"}})
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.error(err))
	*/

	for (const timezone in clocks){
		if (!clocks[timezone]) {
		  console.warn(`Elemento não encontrado para ${timezone}`);
		  continue;
		}
		try {
			const res = await fetch(`${urlBase}${timezone}`, {headers: {"X-Api-Key": apiKey}})
			const data = await res.json()
			console.log(data)
			clocks[timezone].textContent = `${String(data.hour).padStart(2, "0")}:${String(data.minute).padStart(2, "0")}:${String(data.second).padStart(2, "0")}`

		} catch(error){
			console.error("error:", error)
		}

	}

}

// em teoria era pra funcionar, mas a API tem limite de requisições e já estourou 😂. Eu poderia fazer manual, porém o foco era receber a requisição. Creio que para a proposta dele esse projeto foi bem útil
// Em produção, o ideal é usar cache ou atualizar localmente, mas para a ideia do projeto isso está ok, dessa vez o foco não é deixar ela usável (diferente de todos que eu faço), mas aprender, por ser uma API externa e com limites, se eu tentar deixar ele perfeito irei travar e perder o proósito, que seria aprender
setInterval(() => {
	getTimeZone()
}, 1000)

getTimeZone()
