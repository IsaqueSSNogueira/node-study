
import * as dataController from "../services/dataService.js"


const getTasks = (req, res) => {

	const { id } = req.params;
	const userData = dataController.getData(id)

	if(!userData){
		return res.status(404).json({
			message:"Dados do usuário não encontrados"
		})
	}

	return res.status(200).json({
		message:"Sucesso ao buscar dados",
		userData: userData
	})

}


export { getTasks }