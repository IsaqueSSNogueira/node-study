
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
			throw err
	}
}