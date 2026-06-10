
import users from "../data/users.js"

export const getData = (id) => {
	return users.find((item) => {
		return item.id === id
	})
}