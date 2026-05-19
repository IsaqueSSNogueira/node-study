


/* utility functions */

// clear inputs
const clearInputs = () => {
		document.querySelectorAll(".formInput").forEach(input => {input.value = "";})
};


// verify minimum input conditions
const verifyMinInputConditions = (element) => {
		return element.value.trim().length >= 5;;
};


// try sign up
const trySignUp = async (user, password) => {

	console.log(user.value, password.value)
	try{
		const res =	await fetch("http://localhost:3000/register", {
				method: "POST", 
				headers:{"Content-Type": "application/json"}, 
				body: JSON.stringify({user:user.value, password:password.value})
		})
		const data = await res.json();

		// error
		if (!res.ok) {
			alert(data.message || "Erro ao cadastrar");
			return;
		}

		// sucess
		alert("Cadastrado com sucesso!");
		clearInputs();

	} catch(err){
		console.log(err)
		alert("Erro de conexão com o servidor");
	}
}




/* base functions */

// auth register
export const authRegister = () => {
	const userInputRegister = document.querySelector("#userInputRegister")
	const passwordInputRegister = document.querySelector("#passwordInputRegister")
	const signUpButton = document.querySelector("#signUpButton")

	// sign up button
	signUpButton.addEventListener("click", (event) => {
		event.preventDefault()
		const userVerify = verifyMinInputConditions(userInputRegister)
		const passwordVerify = verifyMinInputConditions(passwordInputRegister)

		if(!userVerify || !passwordVerify){
			alert("Dados incompletos")
		}
		else {
			trySignUp(userInputRegister, passwordInputRegister)
			}
	})

}



// auth login
export const authLogin = () => {
	const userInputLogin = document.querySelector("#userInputLogin")
	const passwordInputLogin = document.querySelector("#passwordInputLogin")
	const signInButton = document.querySelector("#signInButton")


	signInButton.addEventListener("click", (event) => {
		event.preventDefault()
		const userVerify = verifyMinInputConditions(userInputLogin)
		const passwordVerify = verifyMinInputConditions(passwordInputLogin)

		if(!userVerify || !passwordVerify){
			alert("Dados incompletos")
		}
		else {
			alert("Login efetuado")
		}
	})
}


// toggle auth screen (login/register)
export const moveAuthScreen = () => {
  
  const tabSwitcherButtons = document.querySelectorAll(".tabSwitcherButton");
  const authScreen = document.querySelector("#authScreen");

  tabSwitcherButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;

      if (mode === "login") {
        authScreen.classList.remove("moveAuthScreen");
      } else {
        authScreen.classList.add("moveAuthScreen");
      }


      // more visually pleasing 
      setTimeout(() => {
      	clearInputs()
      }, 500)

    });
  });
};