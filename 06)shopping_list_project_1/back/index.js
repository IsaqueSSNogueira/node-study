
import express from "express"
import cors from "cors"


const app = express();
app.use(cors())
app.use(express.json())

const items = [
	{name:"Arroz", value:5, soldTo:"kg", quantily:2},
	{name:"Feijão", value:8, soldTo:"kg", quantily:1},
	{name:"Ovo", value:10, soldTo:"duzia", quantily:1},
	{name:"Bife", value:35, soldTo:"kg", quantily:0.5},
]

app.get("/", (req, res) => {
	res.json(items)
})

// 
const PORT = 3000;
app.listen(PORT, () => {
	console.log("Rodando...")
})