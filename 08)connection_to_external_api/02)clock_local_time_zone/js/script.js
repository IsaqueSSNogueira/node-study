
const urlBase = "https://api.api-ninjas.com/v1/worldtime?timezone="
const apiKey = "Px9VzvQomaVrRRxc84c2xUXwwLuOs1oIWuc6EC7s";
// const urlParams = ["America/Sao_Paulo", "America/New_York","Europe/London", "Asia/Tokyo"]

/*
Vou manter a apiKey exposta porque:
- é projeto de estudo 
- API gratuita 
- sem dados sensíveis 
- sem cobrança 

...mas sei da importância de preserva-la em certos contextos 👍
*/

const clocks = {
  "America/Sao_Paulo": {
  	item:document.getElementById("clock-sp"),
  	hour:0,
  	minute:0,
  	second:0,
	},
  "America/New_York": {
  	item:document.getElementById("clock-ny"),
  	hour:0,
  	minute:0,
  	second:0,
  },
  "Europe/London": {
  	item:document.getElementById("clock-lon"),
  	hour:0,
  	minute:0,
  	second:0,
  },
  "Asia/Tokyo": {
  	item: document.getElementById("clock-tok"),
  	hour:0,
  	minute:0,
  	second:0,
  }
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
			if(!data.hour || !data.minute || !data.second) continue
			console.log(data)
			clocks[timezone].hour = data.hour
			clocks[timezone].minute = data.minute
			clocks[timezone].second = data.second

		} catch(error){
			console.error("error:", error)
		}

	}

}

const updateClock = () => {

	for(const timezone in clocks){
		
		const clock = clocks[timezone];


		clock.second++

		if(clock.second >= 60){
			clock.second = 0
			clock.minute++
		}

		if(clock.minute >= 60){
			clock.minute = 0
			clock.hour++ 
		}

		if(clock.hour >= 24){
			clock.hour = 0
		}

		clock.item.textContent = `${String(clock.hour).padStart(2, "0")}:${String(clock.minute).padStart(2, "0")}:${String(clock.second).padStart(2, "0")}`
	}
}

setInterval(() => {
	updateClock()
}, 1000)

getTimeZone()
