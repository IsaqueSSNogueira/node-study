
// import 
import { renderTasks, states } from "./tasks.js"
import { createNewTask, toggleStatusTask, approveEdit, deleteTask, saveDescription } from "./tasksApi.js"




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
				renderTasks(id)
			}
		}
		else {
			alert("Tarefa vazia")
		}					
	})
}


// toggle status task (do/done)
export const checkboxTaskAction = async (task, isChecked) => {

	const success = await toggleStatusTask(task, isChecked)
	console.log(success)
	if (success.status) {
		renderTab(task.userId)
	}
}


/*description*/
export const descriptionButtonsActions = () => {

	const descriptionBackdrop = document.querySelector("#descriptionBackdrop") // fundo
	const descriptionButtons = document.querySelectorAll(".descriptionButtons") // todos botões
	const descriptionTextarea = document.querySelector("#descriptionTextarea") // textarea
	const saveDescriptionButton = document.querySelector("#saveDescriptionButton") // salvar

	descriptionButtons.forEach((item) => {
		item.addEventListener("click",() => {
			descriptionBackdrop.classList.add("hidden")
		})
	})

	saveDescriptionButton.addEventListener("click", async () => {
		const data = await saveDescription(states.idUser, states.currentIdTask, descriptionTextarea.value)
		if(data){
			renderTasks(states.idUser)
			console.log(data)
		}
	})
}

export const openDescriptionBox = (task, id) => {
	const descriptionBackdrop = document.querySelector("#descriptionBackdrop")
	const descriptionTextarea = document.querySelector("#descriptionTextarea")
	
	descriptionBackdrop.classList.remove("hidden")
	descriptionTextarea.value = task.description
	states.currentIdTask = task.id
}


/*more actions (edit/delete task) */
export const toggleMoreActionsContainer = (isOpenMoreActions, containerMoreActions) => {

	isOpenMoreActions.boxStatus = !isOpenMoreActions.boxStatus

	if(isOpenMoreActions.boxStatus){
		containerMoreActions.classList.remove("hidden")
	}
	else{
		containerMoreActions.classList.add("hidden")
	}

}

export const editTask = (isOpenMoreActions, inputTask, containerMoreActions, moreActionsTaskButton, actionsInputBox) => {

	isOpenMoreActions.editTask = !isOpenMoreActions.editTask
	if(isOpenMoreActions.editTask){
		inputTask.disabled = false
		inputTask.focus() 
		inputTask.classList.add("inputFocus")
		actionsInputBox.classList.remove("hidden")
		moreActionsTaskButton.classList.add("hidden")
	}
	else{
		inputTask.disabled = true
	}

	toggleMoreActionsContainer(isOpenMoreActions, containerMoreActions)
}


export const cancelEditAction = (id) => {
	renderTab(id)
}

export const approveEditAction = async (idUser, idTask, inputTask) => {

	const text = inputTask.value;

	if(text.lenght < 1){
		alert("Insira um título para a tarefa")
		return;
	}

	const data = await approveEdit(idUser, idTask, text) 

	if(data){
		console.log(data)
		renderTab(idUser)
	}

}


export const deleteTaskAction = async (idUser, taskId) => {

	const data = await deleteTask(idUser, taskId)

	if(data){
		console.log(data)
		renderTab(idUser)
	}
}