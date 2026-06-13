
// imports
import {clearInputs} from "./../utils/form.js"
import {renderTaskScreen} from "./../tasks/tasks.js"

// try sign up
export const trySignUp = async (user, password) => {

	try{
		const res =	await fetch("http://localhost:3000/register", {
				method: "POST", 
				headers:{"Content-Type": "application/json"}, 
				body: JSON.stringify({inputUser:user, inputPassword:password})
		})
		const data = await res.json();

		// error
		if (!res.ok) {
			throw new Error(data?.message || "Erro ao cadastrar");
			return;
		}

		// sucess
		alert("Cadastrado com sucesso!", data);
		// login imediato
		await trySignIn(user, password)
		clearInputs();

	} catch(err){
		console.error(err)
		alert("Erro de conexão com o servidor");
	}
}


// try sign in

export const trySignIn = async (user, password) => {

	console.log(user, password)

	try{
		const res = await fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({inputUser:user, inputPassword:password})
		})

		const data = await res.json()
		if(!res.ok){
			throw new Error(data?.message || "Erro ao efetuar login")
			return;
		}
		alert("Login efetuado")
		console.log(data)
		renderTaskScreen(data.id)
	}catch(err){
		console.error(err)
		alert("Erro ao fazer login")
	}

}