
import * as loginService from "../services/loginService.js";


export const signIn =  (req, res) => {

	const {inputUser, inputPassword} = req.body;
	
	const trySignIn = loginService.foundUser(inputUser, inputPassword)



	if(!foundUser){
		return res.status(404).json({
			message:"Usuário ou senha incorretos"
		})
	}
	return res.status(200).json({
		message: "Login efetuado",		
		id:foundUser.id,
	})
}