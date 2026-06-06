
import users from "../data/users.js"


export const foundUser = (inputUser, inputPassword) => {
	users.find((item) => {
		return item.user === inputUser && item.password === inputPassword
	})
}
