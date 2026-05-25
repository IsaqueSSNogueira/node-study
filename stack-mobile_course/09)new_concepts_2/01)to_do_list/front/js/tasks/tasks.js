
import {getTasks} from "./tasksApi.js"



const createTaskBox = (task, taskContainer) => {

	// render
	taskContainer.innerHTML += `
	  <div class="taskBox">
	    <input type="checkbox" class="checkboxTask">
	    <div class="infoTaskContainer">
	      <div class="inputTaskContainer">
	        <input type="text" class="inputTask" value="${task.text}" disabled>
	      </div>
	      <button class="descriptionTaskButton">
	        <i class="fa-solid fa-circle-info icon"></i>
	        Descrição
	      </button>
	    </div>
	    <button class="moreActionsTaskButton">
	      <i class="fa-solid fa-ellipsis-vertical icon"></i>
	    </button>
	  </div>
	`
}

const buttonsToggleTasksTab = (tab, id) => {

	const buttonTaskTab = document.querySelectorAll(".buttonTaskTab")
	const tabToDo = document.querySelector("#tabToDo")
	const tabDone = document.querySelector("#tabDone")


	buttonTaskTab.forEach((item) => {
		item.addEventListener("click", (event) => {

			// toggle main var
			tab = event.currentTarget.dataset.type
			
			// style tabs
			if(tab === "done"){
				tabDone.classList.add("activeTab")
				tabToDo.classList.remove("activeTab")
			}
			// default
			else {
				tabToDo.classList.add("activeTab")
				tabDone.classList.remove("activeTab")
			}
		
			renderTasks(id, tab)
		})
	})
}

// quando renderiza a tela, chama essa função
const renderTasks = async (id, tab) => {

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
			if(tab === "toDo") createTaskBox(task, taskContainer)
		}
		else if(task.completed){
			doneCount++
			if(tab === "done") createTaskBox(task, taskContainer)
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
	}
	else{
		authScreen.classList.remove("hidden")
		taskScreen.classList.add("hidden")
	}
}