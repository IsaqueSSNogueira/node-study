
import {getTasks} from "./tasksApi.js"
import {buttonsToggleTasksTab, newTask, checkboxTaskAction} from "./tasksActions.js"



const createTaskBox = (task, taskContainer, id) => {

	/*create & render*/

	// base
	const taskBox = document.createElement("taskBox")
	taskBox.classList.add("taskBox")

	// checkbox
	const checkboxTask = document.createElement("input")
	checkboxTask.type = "checkbox"
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

	// appendChild
	inputTaskContainer.appendChild(inputTask)
	infoTaskContainer.appendChild(inputTaskContainer)
	infoTaskContainer.appendChild(descriptionTaskButton)
	taskBox.appendChild(checkboxTask)
	taskBox.appendChild(infoTaskContainer)
	taskBox.appendChild(moreActionsTaskButton)

	taskContainer.appendChild(taskBox)

}


// quando renderiza a tela, chama essa função
export const renderTasks = async (id, tab = "toDo") => {

	// data
	const dataUser = await getTasks(id)
	console.log(dataUser)

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
			if(tab === "toDo") createTaskBox(task, taskContainer, id)
		}
		else if(task.completed){
			doneCount++
			if(tab === "done") createTaskBox(task, taskContainer, id)
		}
	})
	// renderizar quantidade
	toDoCountE.textContent = toDoCount;
	doneCountE.textContent = doneCount;
}



export const renderTaskScreen = async (id) => {

	const authScreen = document.querySelector("#authScreen")
	const taskScreen = document.querySelector("#taskScreen")
	let tab = "toDo" // "toDo" or "done"
	buttonsToggleTasksTab(tab, id)

	if(id){
		authScreen.classList.add("hidden")
		taskScreen.classList.remove("hidden")
		renderTasks(id, tab)
		newTask(id)
	}
	else{
		authScreen.classList.remove("hidden")
		taskScreen.classList.add("hidden")
	}
}