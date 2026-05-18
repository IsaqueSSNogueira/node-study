


/* utility functions */

// clear inputs
const clearInputs = () => {
		document.querySelectorAll(".formInput").forEach(input => {input.value = "";})
};


// verify minimum input conditions
const verifyMinInputConditions = (element) => {
		return element.value.trim().length >= 5;;
};


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
			alert("Cadastrado")
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
			alert("Cadastrado")
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