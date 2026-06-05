
# 🌆 Novos conceitos 3 (BACKEND - parte 2)

- Foco em separação de arquivo, melhor estruturação e recursos conforme o projeto escala.


## 🗃 Organização dos arquivos

- server;
- app;
- routes;
- controllers;
- middleware básico.


### 🗂 Separação 
```
src/
│
├── server.js          // ponto de entrada
├── app.js             // configurações do express
│
├── routes/
│   └── taskRoutes.js
│
├── controllers/
│   └── taskController.js
│
├── services/
│   └── taskService.js
│
├── models/
│   └── taskModel.js   // (se usar banco)
│
├── middlewares/
│   └── errorMiddleware.js
│
└── utils/
```

## 1) Server.js

- Mínimo possível; 
- Ele inicia o servidor:
```
// server

import app from "app.js"

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})

```

## 2) App.js

- Configuração do Express;
- Onde centraliza middlewares (exemplo: `express`, `cors`) e rotas:

```
import express from "express"
import taskRoutes from "routes/taskRoutes.js"

const app = express()

app.use(express.json())

app.use("/tasks", taskRoutes)

export default app;
```

<br> 

### 🔀 O que é `app.use()` ?

- Ele conecta algo no fluxo da requisição;
- Pode ser middleware ou um conjunto de rotas;
-  O que acontece aqui `app.use("/tasks", taskRoutes)` - Significa: “Toda requisição que começar com /tasks, manda pro taskRoutes”;
- Fluxo: 

1) server;
2) app.js; → app.use("/tasks", taskRoutes);
3) taskRoutes → router.get("/") ;
4) controller;


- **Usado para middlewares e agrupamento de rotas, ele define "toda requisição que passar por aqui, executa isso".**;
- **Agrupando rotas, ele define "executa esse agrupamento de rotas se a requisição partir da url "X" (/tasks, por exemplo)**;
- **Já se for métodos específicos, como `app.get`, (para ilustração) ele primeiramente só vai escutar requisições com esse método, pra a partir daí ver qual é a url especifica. Se a url bater, ele executa conforme (na prática é url > metódo, mas o foco é "os dois estão alinhados? url e método?")**.

<br>

## Routes

```
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);

export default router;
```


### Controls


<br>

### Service


<br>


