
import * as usersService from "../services/usersService.js"

// getData
const getUserData = (req, res) => {

	const { id } = req.params;
	const userData = usersService.getData(id);

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

const newTask = (req, res) => {

	const { id } = req.params;
	const { text } = req.body;

	const isNewTaskCreated = usersService.createNewTask(id, text)

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

const updateTaskData = (req, res) => {

	const { id, taskId } = req.params;
	const { text, description, completed } = req.body;

	const user = usersService.getData(id);
	if(!user) return res.status(404).json({ message: "Usuário não encontrado" }) 
	
	const task = usersService.findTask(user, taskId)
	if(!task) return res.status(404).json({ message: "Tarefa não encontrada" }) 


	let responseMessage = ""

	if(text !== undefined) {
		usersService.updateTaskData(task, "text", text)
		responseMessage = `Nome tarefa atualizado: ${text}`
	}
	if(description !== undefined) {
		usersService.updateTaskData(task, "description", description)
		responseMessage = `Descrição atualizada: ${description}`
	}
	if(completed !== undefined) {
		usersService.updateTaskData(task, "completed", completed)
		responseMessage = completed ? "Tarefa marcada" : "Tarefa desmarcada"
	}


	return res.status(200).json({
		message: `${responseMessage}`,
		status:true,
		task
	})

}


const deleteTask = (req, res) => {

	const {id, taskId} = req.params;
	
	const user = usersService.getData(id);
	if(!user) return res.status(404).json({ message: "Usuário não encontrado" })  

	// action
	const isTaskDeleted = usersService.deleteTask(user, taskId)

	if(!isTaskDeleted){
		return res.status(404).json({ message: "Erro ao tentar deletar tarefa"})
	}

	return res.status(200).json({
		message: "Tarefa deletada com sucesso",
		tasks:user.tasks
	})

}


export { getUserData, newTask, updateTaskData, deleteTask };