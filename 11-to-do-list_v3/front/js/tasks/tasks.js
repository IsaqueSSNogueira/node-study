
import { getUserData } from "./tasksApi.js"
import {
	buttonsToggleTasksTab, 
	newTask, 
	checkboxTaskAction, 
	toggleMoreActionsContainer, 
	editTask, 
	cancelEditAction,
	approveEditAction,
	deleteTaskAction,
	openDescriptionBox
		} from "./tasksActions.js"

// mini useState
export const states = {
	currentTab: "toDo", // "toDo" or "done"
	idUser: "",
	currentIdTask: ""
}


const createTaskBox = (task, taskContainer) => {

	/*create & render*/

	// base
	const taskBox = document.createElement("taskBox")
	taskBox.classList.add("taskBox")

	// checkbox
	const checkboxTask = document.createElement("input")
	checkboxTask.type = "checkbox"
	checkboxTask.checked = task.completed;
	checkboxTask.classList.add("checkboxTask")
	checkboxTask.addEventListener("change", (event) => {checkboxTaskAction(task, event.currentTarget.checked)})

	// info task container 
	const infoTaskContainer = document.createElement("div")
	infoTaskContainer.classList.add("infoTaskContainer")
	
	// input task container
	const inputTaskContainer = document.createElement("div")
	inputTaskContainer.classList.add("inputTaskContainer")
	// input task
	const inputTask = document.createElement("input")
	inputTask.type = "text"
	inputTask.disabled = true;
	inputTask.placeholder = "Escreva algo"
	inputTask.value = task.title
	inputTask.classList.add("inputTask")

	// description button
	const descriptionTaskButton = document.createElement("button")
	descriptionTaskButton.classList.add("descriptionTaskButton")
	descriptionTaskButton.innerHTML = `<i class="fa-solid fa-circle-info icon"></i>Descrição`
	descriptionTaskButton.title = task.description;
	descriptionTaskButton.addEventListener("click", () => {openDescriptionBox(task, task.userId)})

	// more actions
	const moreActionsTaskButton = document.createElement("button")
	moreActionsTaskButton.classList.add("moreActionsTaskButton")
	moreActionsTaskButton.innerHTML = `<i class="fa-solid fa-ellipsis-vertical icon"></i>`

	// more actions container
	const containerMoreActions = document.createElement("div")
	containerMoreActions.classList.add("containerMoreActions")
	containerMoreActions.classList.add("hidden")
	const editTaskButton = document.createElement("button")
	editTaskButton.textContent = "Edit"
	editTaskButton.classList.add("moreActionsTaskButtons")
	const deleteTaskButton = document.createElement("button")
	deleteTaskButton.textContent = "Delete"
	deleteTaskButton.classList.add("moreActionsTaskButtons")

	// actions edit input
	const actionsInputBox = document.createElement("div")
	actionsInputBox.classList.add("actionsInputBox")
	actionsInputBox.classList.add("hidden")
	const cancelEditInputButton = document.createElement("button")
	cancelEditInputButton.innerHTML = `<i class="fa-solid fa-x iconsInputActions"></i>`
	cancelEditInputButton.classList.add("cancelEditInputButton")
	const approveEditButton = document.createElement("button")
	approveEditButton.innerHTML = `<i class="fa-solid fa-check iconsInputActions"></i>`
	approveEditButton.classList.add("approveEditButton")


	actionsInputBox.appendChild(cancelEditInputButton)
	actionsInputBox.appendChild(approveEditButton)
	containerMoreActions.appendChild(editTaskButton)
	containerMoreActions.appendChild(deleteTaskButton)

	// actions events
	const isOpenMoreActions = {boxStatus: false, editTask: false,}
	moreActionsTaskButton.addEventListener("click", () => {toggleMoreActionsContainer(isOpenMoreActions, containerMoreActions)})
	
	editTaskButton.addEventListener("click", () => {editTask(isOpenMoreActions, inputTask, containerMoreActions, moreActionsTaskButton, actionsInputBox)})
	cancelEditInputButton.addEventListener("click", () => {cancelEditAction(task.userId)})
	approveEditButton.addEventListener("click", () => {approveEditAction(task.userId, task._id, inputTask)})
	
	deleteTaskButton.addEventListener("click", () => {deleteTaskAction(task.userId, task._id)})



	// appendChild
	inputTaskContainer.appendChild(inputTask)
	infoTaskContainer.appendChild(inputTaskContainer)
	infoTaskContainer.appendChild(descriptionTaskButton)
	taskBox.appendChild(checkboxTask)
	taskBox.appendChild(infoTaskContainer)
	taskBox.appendChild(moreActionsTaskButton)
	taskBox.appendChild(containerMoreActions)
	taskBox.appendChild(actionsInputBox)


	taskContainer.appendChild(taskBox)

}


// quando renderiza a tela, chama essa função
export const renderTasks = async (id) => {

	// data
	const userData = await getUserData(id)

	// elementos
	const toDoCountE = document.querySelector("#toDoCount")
	const doneCountE = document.querySelector("#doneCount")
	const taskContainer = document.querySelector("#taskContainer")
	taskContainer.innerHTML = "" // clear

	// redefinir
	let toDoCount = 0;
	let doneCount = 0;


	userData.forEach(task => {
		if(!task.completed){
			// count task
			toDoCount++
			// render
			if(states.currentTab === "toDo") createTaskBox(task, taskContainer, id)
		}
		else if(task.completed){
			doneCount++
			if(states.currentTab === "done") createTaskBox(task, taskContainer, id)
		}
	})
	// renderizar quantidade
	toDoCountE.textContent = toDoCount;
	doneCountE.textContent = doneCount;
}



export const renderTaskScreen = async (id) => {

	const authScreen = document.querySelector("#authScreen")
	const taskScreen = document.querySelector("#taskScreen")
	await buttonsToggleTasksTab(id)

	if(id){
		authScreen.classList.add("hidden")
		taskScreen.classList.remove("hidden")
		states.idUser = id
		renderTasks(id)
		newTask(id)
	}
	else{
		authScreen.classList.remove("hidden")
		taskScreen.classList.add("hidden")
	}
}
