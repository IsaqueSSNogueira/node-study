
import * as usersService from "../services/usersService.js"

// getData
const getUserData = async (req, res) => {

	const { id } = req.params;
	const userData = await usersService.getData(id);

	if(!userData){
		return res.status(404).json({
			message: "Erro ao buscar dados do usuário"
		})
	} 

	return res.status(200).json({
		message:"Sucesso ao buscar dados do usuário",
		userData:userData
	})
}



// newTask

const newTask = async (req, res) => {

	const { id } = req.params;
	const { text } = req.body;

	const isNewTaskCreated = await usersService.createNewTask(id, text)

	if(!isNewTaskCreated){
		return res.status(404).json({
			message:"Erro ao criar tarefa"
		})
	}

	return res.status(201).json({
		message:"Sucesso ao criar tarefa",
		task:isNewTaskCreated
	})

}


// update task data

const updateTaskData = async (req, res) => {

	const { id, taskId } = req.params;
	const { text, description, completed } = req.body;

	let responseMessage = ""

	if(text !== undefined) {
		await usersService.updateTaskData(taskId, "text", text)
		responseMessage = `Nome tarefa atualizado: ${text}`
	}
	if(description !== undefined) {
		await usersService.updateTaskData(taskId, "description", description)
		responseMessage = `Descrição atualizada: ${description}`
	}
	if(completed !== undefined) {
		await usersService.updateTaskData(taskId, "completed", completed)
		responseMessage = completed ? "Tarefa marcada" : "Tarefa desmarcada"
	}


	return res.status(200).json({
		message: `${responseMessage}`,
		status:true,
	})

}


const deleteTask = async (req, res) => {

	const {id, taskId} = req.params;
	
	const isTaskDeleted = await usersService.deleteTask(taskId)

	if(!isTaskDeleted){
		return res.status(404).json({ message: "Erro ao tentar deletar tarefa"})
	}

	return res.status(200).json({
		message: "Tarefa deletada com sucesso"
	})

}


export { getUserData, newTask, updateTaskData, deleteTask };