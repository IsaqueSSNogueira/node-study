
import {getTasks} from "./tasksApi.js"

const renderTasks = async (id) => {
	const dataUser = await getTasks(id)
	console.log(dataUser)

	const taskContainer = document.querySelector("#taskContainer")

	dataUser.tasks.forEach(task => {
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
	})


}



export const renderTaskScreen = (id) => {

	const authScreen = document.querySelector("#authScreen")
	const taskScreen = document.querySelector("#taskScreen")

	if(id){
		authScreen.classList.add("hidden")
		taskScreen.classList.remove("hidden")
		renderTasks(id)
	}
	else{
		authScreen.classList.remove("hidden")
		taskScreen.classList.add("hidden")
	}
}