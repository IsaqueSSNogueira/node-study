
import users from "../data/usersData.js"
import { v4 as uuidv4} from "uuid"
import User from "./../models/User.js"

export const existUser = async (inputUser, inputPassword) => {

	return await Task.findOne({name:inputUser})
}

export const createNewUser = async (inputUser, inputPassword) => {
	
	await Task.create({
		name:inputUser,
		password:inputPassword
	})
}