
import {verifyMinInputConditions} from './../utils/form.js'
import {trySignUp, trySignIn} from './authApi.js'

/* base functions */

// auth register
export const authRegister = () => {
	const userInputRegister = document.querySelector("#userInputRegister")
	const passwordInputRegister = document.querySelector("#passwordInputRegister")
	const signUpButton = document.querySelector("#signUpButton")

	// sign up button
	signUpButton.addEventListener("click", (event) => {
		event.preventDefault()
		const userVerify = verifyMinInputConditions(userInputRegister, "user")
		const passwordVerify = verifyMinInputConditions(passwordInputRegister, "password")

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
		const userVerify = verifyMinInputConditions(userInputLogin, "user")
		const passwordVerify = verifyMinInputConditions(passwordInputLogin, "password")

		if(!userVerify || !passwordVerify){
			alert("Dados incompletos")
		}
		else {
			trySignIn(userInputLogin, passwordInputLogin)
		}
	})
}
