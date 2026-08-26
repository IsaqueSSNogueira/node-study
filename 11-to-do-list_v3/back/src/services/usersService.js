
import { v4 as uuidv4} from "uuid"
import Task from "./../models/Task.js"

const users = []

export const getData = async (id) => {
	return await Task.find({userId:id})
}

export const createNewTask = async (id, text) => {

	// add new task
	const newTask = await Task.create({
		userId:id,
		title:text,
		description:""
	})

	return newTask;
}


// find task for update
export const findTask = async (user, taskId) => {

	return await Task.findOne({ _id:taskId, userId:user })
}


export const updateTaskData = async (taskId, type, value) => {

	if(type === "text"){
		await Task.findByIdAndUpdate(taskId, {title:value}, { returnDocument: "after" })
	}
	else if(type === "description"){
		await Task.findByIdAndUpdate(taskId, {description:value}, { returnDocument: "after" })
	}
	else if(type === "completed"){
		await Task.findByIdAndUpdate(taskId, {completed:value}, { returnDocument: "after" })		
	}

} 

export const deleteTask = async (taskId) => {

  const deletedTask = await Task.findByIdAndDelete(taskId)

  return true;
}