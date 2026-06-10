
import * as registerService from "../services/registerService.js";

const singUp = (req, res) => {

	const {inputUser, inputPassword} = req.body;

	const existUser = registerService.existUser(inputUser, inputPassword)

	if(existUser){
		return res.status(409).json({
			message:"Usuário já existe",
		})
	}
	registerService.createNewUser(inputUser, inputPassword);
	return res.status(201).json({
		message:"Usuário criado", 
	})

}


export default singUp;