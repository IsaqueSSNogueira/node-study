
// import 
import { renderTasks, states } from "./tasks.js"
import { createNewTask, toggleStatusTask, deleteTask } from "./tasksApi.js"



const renderTab = (id) => {

	const tabToDo = document.querySelector("#tabToDo")
	const tabDone = document.querySelector("#tabDone")
	
	// style tabs
	if(states.currentTab === "done"){
		tabDone.classList.add("activeTab")
		tabToDo.classList.remove("activeTab")
	}
	// default
	else {
		tabToDo.classList.add("activeTab")
		tabDone.classList.remove("activeTab")
	}

	renderTasks(id)
}

// toggle tab (do / done)
export const buttonsToggleTasksTab = (id) => {

	const buttonTaskTab = document.querySelectorAll(".buttonTaskTab")

	buttonTaskTab.forEach((item) => {
		item.addEventListener("click", (event) => {
			// toggle main var
			states.currentTab = event.currentTarget.dataset.type
			renderTab(id)
		})
	})
}



// new task

export const newTask = async (id) => {

	const newTaskButton = document.querySelector("#newTaskButton")
	const newTaskInput = document.querySelector("#newTaskInput")

	newTaskButton.addEventListener("click", () => {
		const value = newTaskInput.value
		if(value){
			const res = createNewTask(id, value)
			if(res){
				newTaskInput.value = ""				
				alert("tarefa criada")
				renderTasks(id)
			}
		}
		else {
			alert("Tarefa vazia")
		}					
	})
}


// toggle status task (do/done)
export const checkboxTaskAction = async (idUser, idTask, isChecked) => {

	const success = await toggleStatusTask(idUser, idTask, isChecked)
	console.log(success)
	if (success.status) {
		renderTab(idUser)
	}
}


export const toggleMoreActionsContainer = (isOpenMoreActions, containerMoreActions) => {

	isOpenMoreActions.boxStatus = !isOpenMoreActions.boxStatus

	if(isOpenMoreActions.boxStatus){
		containerMoreActions.classList.remove("hidden")
	}
	else{
		containerMoreActions.classList.add("hidden")
	}

}

export const editTask = (isOpenMoreActions, inputTask) => {

	isOpenMoreActions.editTask = !isOpenMoreActions.editTask
	if(isOpenMoreActions.editTask){
		inputTask.disabled = false
		inputTask.focus() 
	}
	else{
		inputTask.disabled = true
	}
}

export const deleteTaskAction = async (idUser, taskId) => {

	const data = await deleteTask(idUser, taskId)

	if(data){
		console.log(data)
		renderTab(idUser)
	}
}