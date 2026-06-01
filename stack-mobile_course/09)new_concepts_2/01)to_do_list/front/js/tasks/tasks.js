
import {getTasks} from "./tasksApi.js"
import {
	buttonsToggleTasksTab, 
	newTask, 
	checkboxTaskAction, 
	toggleMoreActionsContainer, 
	editTask, 
	deleteTaskAction
		} from "./tasksActions.js"

// mini useState
export const states = {
	currentTab: "toDo", // "toDo" or "done"
}


const createTaskBox = (task, taskContainer, id) => {

	/*create & render*/

	// base
	const taskBox = document.createElement("taskBox")
	taskBox.classList.add("taskBox")

	// checkbox
	const checkboxTask = document.createElement("input")
	checkboxTask.type = "checkbox"
	checkboxTask.checked = task.completed;
	checkboxTask.classList.add("checkboxTask")
	checkboxTask.addEventListener("change", (event) => {checkboxTaskAction(id, task.id, event.currentTarget.checked)})

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
	inputTask.value = task.text
	inputTask.classList.add("inputTask")

	// description button
	const descriptionTaskButton = document.createElement("button")
	descriptionTaskButton.classList.add("descriptionTaskButton")
	descriptionTaskButton.innerHTML = `<i class="fa-solid fa-circle-info icon"></i>Descrição`

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
	editTaskButton.classList.add("moreActionstaskButtons")
	const deleteTaskButton = document.createElement("button")
	deleteTaskButton.textContent = "Delete"
	deleteTaskButton.classList.add("moreActionstaskButtons")

	containerMoreActions.appendChild(editTaskButton)
	containerMoreActions.appendChild(deleteTaskButton)

	const isOpenMoreActions = {boxStatus: false, editTask: false,}
	moreActionsTaskButton.addEventListener("click", () => {toggleMoreActionsContainer(isOpenMoreActions, containerMoreActions)})
	editTaskButton.addEventListener("click", () => {editTask(isOpenMoreActions, inputTask)})
	deleteTaskButton.addEventListener("click", () => {deleteTaskAction(id, task.id)})

	// appendChild
	inputTaskContainer.appendChild(inputTask)
	infoTaskContainer.appendChild(inputTaskContainer)
	infoTaskContainer.appendChild(descriptionTaskButton)
	taskBox.appendChild(checkboxTask)
	taskBox.appendChild(infoTaskContainer)
	taskBox.appendChild(moreActionsTaskButton)
	taskBox.appendChild(containerMoreActions)


	taskContainer.appendChild(taskBox)

}


// quando renderiza a tela, chama essa função
export const renderTasks = async (id) => {

	// data
	const dataUser = await getTasks(id)

	// elementos
	const toDoCountE = document.querySelector("#toDoCount")
	const doneCountE = document.querySelector("#doneCount")
	const taskContainer = document.querySelector("#taskContainer")
	taskContainer.innerHTML = "" // clear

	// redefinir
	let toDoCount = 0;
	let doneCount = 0;


	dataUser.tasks.forEach(task => {
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
		renderTasks(id)
		newTask(id)
	}
	else{
		authScreen.classList.remove("hidden")
		taskScreen.classList.add("hidden")
	}
}