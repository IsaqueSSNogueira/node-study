
import users from "../data/usersData.js"
import { v4 as uuidv4} from "uuid"


export const getData = (id) => {
	return users.find((user) => {
		return user.id === id;
	})
}

export const createNewTask = (id, text) => {

	const user = getData(id)

	if(!user){
		return false
	}

	// add new task
	const task = {
		id: uuidv4(),
		text:text,
		description: "",
		completed: false
	}

	user.tasks.push(task)

	return task;
}


// find task
export const findTask = (user, taskId) => {

	return user.tasks.find((task) => {
		return task.id === taskId
	})
}


export const updateTaskData = (task, type, value) => {

	if(type === "text"){
		task.text = value;
	}
	else if(type === "description"){
		task.description = value;
	}
	else if(type === "completed"){
		task.completed = value;
	}

} 


export const deleteTask = (user, taskId) => {

	const taskIndex = user.tasks.findIndex(item => item.id === taskId)
	if(taskIndex === -1){
		return false
	}

	user.tasks.splice(taskIndex, 1)
	return true
}