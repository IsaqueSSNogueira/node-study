import mongoose from "mongoose"

const connectDatabase = async () => { 

	try{
		await mongoose.connect(process.env.MONGO_URI)
		console.log("MongoDB conectado!")
	}
	catch(err){
		console.error(`Erro ao fazer conexão com o banco de dados. ${err}`)
		process.exit(1);
	}
}

export default connectDatabase;