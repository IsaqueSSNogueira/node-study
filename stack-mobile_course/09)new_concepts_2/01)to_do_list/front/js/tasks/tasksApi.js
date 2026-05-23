

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