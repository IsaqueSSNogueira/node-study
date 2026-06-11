
import users from '../data/usersData.js'
import { v4 as uuidv4} from "uuid"

export const existUser = (inputUser, inputPassword) => {

	return users.find((item) => {
		return item.user === inputUser 
	})
}

export const createNewUser = (inputUser, inputPassword) => {
	users.push({
		id:uuidv4(),
		user:inputUser,
		password:inputPassword,
		tasks: []
	})
}