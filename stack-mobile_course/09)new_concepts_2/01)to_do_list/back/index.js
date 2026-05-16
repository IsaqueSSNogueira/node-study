
// import
import express from "express"

// initialization
const app = express()
app.use(express.json())


// base
app.get("/", (req, res) => {
	res.send("Ok")
})


app.listen(3000, () => {
	console.log("Funcionando ;)")
})