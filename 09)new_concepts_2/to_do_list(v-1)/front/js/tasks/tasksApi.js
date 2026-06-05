
// get tasks
export const getTasks = async (id) => {

	try{
		const res = await fetch(`http://localhost:3000/data/${id}`)
		const data = await res.json()
		return data;
	} catch(err){
		console.error(err)
		alert("Erro ao buscar tarefas")
	}
}


// new task
export const createNewTask = async (id, value) => {

	try{
		const res = await fetch(`http://localhost:3000/tasks/${id}`, {
			method:"POST",
			headers:{"Content-Type": "application/json"},
			body: JSON.stringify({ value: value }),
		})
		if (!res.ok) {
      		throw new Error("Erro na requisição")
    	}

    	const data = await res.json()
    	return data;

	} catch(err) {
			console.error(err)
			alert("Erro ao criar a tarefa")
	}
}


// toggle status task (do/done)

export const toggleStatusTask = async (idUser, idTask, isChecked) => {

	try{
		const res = await fetch(`http://localhost:3000/tasks/${idUser}/${idTask}`, {
			method:"PATCH",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({isChecked:isChecked})
		})
		const data = await res.json()

		if(!res.ok){
			throw new Error("Erro ao marcar/desmarcar tarefa")
		}
		return data;

	} catch(err){
		console.log(err)
		alert(err.message || "Falha na requisição")
	}
}


export const approveEdit = async (idUser, idTask, text) => {

	try{
		const res = await fetch(`http://localhost:3000/tasks/${idUser}/${idTask}`, {
			method: "PATCH",
			headers:{"Content-Type": "application/json"},
			body: JSON.stringify({text:text})
		})

		const data = await res.json()
		if(!res.ok){
			throw new Error("Erro ao atualizar título tarefa")
		}

		return data;

	} catch(err){
		console.log(err)
	}
}


// delete task

export const deleteTask = async (idUser, taskId) => {

	try{
		const res = await fetch(`http://localhost:3000/tasks/${idUser}/${taskId}`, {
			method: "DELETE"
		})
		const data = await res.json()
		if(!res.ok){
			throw new Error("Erro ao deletar tarefa")
		}

		return data;


	} catch(err){
		console.log(err.message || "Falha na requisição")
	}
}


//  salve description
export const saveDescription = async (idUser, currentIdTask, description) => {
		try{
			const res = await fetch(`http://localhost:3000/tasks/${idUser}/${currentIdTask}`, {
				method: "PATCH",
				headers:{"Content-Type": "application/json"},
				body: JSON.stringify({description: description})
			})
			const data = await res.json()
			if(!res.ok){
				throw new Error("Erro ao atualizar descrição da tarefa")
			}
			return data;

		}catch(err){
			console.log(err)
		}
}