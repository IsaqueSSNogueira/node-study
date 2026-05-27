
// import 
import {renderTasks} from "./tasks.js"
import {createNewTask} from "./tasksApi.js"


// toggle tab (do / done)
export const buttonsToggleTasksTab = (tab, id) => {

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

export const toggleStatusTask = async (idUser, idTask) => {

	alert(`${idUser} e ${idTask}`)

}