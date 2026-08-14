
# 💼 Mongo DB

## 🧠 Base

1) | Mongo |

2) | Conta |

3) | Project |

4) | Cluster |

5) | Database |

6) | Collection |

7) | Document |

8) | Field |


### 💡 Destrinchando...

1) Banco de dados;
2) Crie a conta;
3) O "Project" é parte da configuração (e não um projeto em específico);
4) Cluster é o "espaço/servidor" onde seus bancos de dados ficam armazenados e funcionando;
5) Database pode ser resumido a "pasta" de um projeto em especifíco (notes app, task app, pizza delivery, etc...);
6) Collection é uma "tabela" com dados relacionados (usuários, tarefas, cardápio, etc...), guardando Documents nela;
7) Document é o objeto que guarda dados de um conjunto, como por exemplo, o registro de um usuário (nome, senha, info), dados de uma tarefa (titulo, descrição, status), etc... sempre contendo um id;
8) Field é cada campo dentro do document, do qual possui caracteristicas/atributos que recebe (type, required, default).


<br>




## 💿 Backend com MongoDB

* Arquivos:
```
server.js
app.js
src/
    .env
    config/database.js
    models/Task.js
    services/
    controllers/
    routes/
```


### 💻 server.js

```
import app from "app.js"
import connectDatabase from "./src/config/database.js"
import "dotenv/config"

const PORT = 3000
connectDatabase()
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})


```

* dotenv -> `npm install dotenv`;
* No server você importa para ser o ponto de inicialização o dotenv: `import "dotenv/config";`
* Ele carrega as variáveis do arquivo **.env** e as disponibiliza em **process.env**.



### 🔑 .env

`MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/taskApp
PORT=3000`



### 💿 config/database.js

```
import mongoose from "mongoose";

const connectDatabase = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("MongoDB conectado!");
};

export default connectDatabase;
```

* `process.env`: O **.env** mantém oculta as variaveis dentro dele. **process.env** é o objeto/ambiente do processo Node onde essas configurações ficam disponíveis e aqui estamos acessando a variável **MONGO_URI**;
* Não esqueça de instalar o **mongoose**: > `npm install mongoose`.  

<br>



## 🏛 Models/

```
import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true,
  }
  completed:{
    type:boolean,
    default: false
  }
})

const Task = mongoose.model("Task", taskSchema)


export default Task;
```


### Model

* O arquivo do model (Task.js) possui duas responsabilidades principais:

#### Schema

* Ele define a estrutura;
* Nele não é definido nenhum objeto, mas quais serão os fields e as características deles;
* Exemplo:

```
const taskSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  }
  completed:{
    type:boolean,
    default:false
  }
})

/* Aqui é definido:
- Estrutura com dois fields;
- title será um texto e é obrigatório;
- completed será um valor boleano, sendo o valor padrão false
/*
``` 

#### Model

* Monta a estrutura com base no Schema e nos permite manipula-la;
* Exemplo: `const Task = mongoose.model("Task", taskSchema)`
* Qaundo você monta uma estrutura desse tipo, você está dizendo ao mongoose: "Esse Schema representa o tipo **Task**. Crie um model para eu trablhar com ele";
* Nisso, o mongoose vai associar esse model à collection correspondente, normalmente `task`.

#### 🤔 Métodos que um model oferece:

* Task.create()
* Task.find()
* Task.findOne()
* Task.findById()
* Task.findByIdAndUpdate()
* Task.findByIdAndDelete()


