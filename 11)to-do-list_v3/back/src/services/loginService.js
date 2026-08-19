
import User from "./../models/User.js"

export const foundUser = (inputUser, inputPassword) => {
	return User.findOne({name:inputUser, password:inputPassword})
}
