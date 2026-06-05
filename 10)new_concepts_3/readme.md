
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

(base)
- Ele conecta algo no fluxo da requisição;
- Pode ser middleware ou um conjunto de rotas;
-  O que acontece aqui `app.use("/tasks", taskRoutes)` - Significa: “Toda requisição que começar com /tasks, manda pro taskRoutes”;
- Fluxo: 

1) server;
2) app.js; → app.use("/tasks", taskRoutes);
3) taskRoutes → router.get("/") ;
4) controller;

(final)
- **Usado para middlewares e agrupamento de rotas, ele define "toda requisição que passar por aqui, executa isso".**;
- **Agrupando rotas, ele define "executa esse agrupamento de rotas se a requisição partir da url "X" (/tasks, por exemplo)**;
- **Já se for métodos específicos, como `app.get`, (para ilustração) ele primeiramente só vai escutar requisições com esse método, pra a partir daí ver qual é a url especifica. Se a url bater, ele executa conforme (na prática é url > metódo, mas o foco é "os dois estão alinhados? url e método?")**.

<br>

## Routes

- Só define qual controller será chamado confome o método;

```
import express from "express";
import { getTasks, createTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);

export default router; // por ser default, ele pode ser chamado como taskRoutes no app.js
```

<br>

- Url atrelada já foi definida no app.js, aqui é uma segunda triagem;
- Tipo como em um hospital:
1) 🚪 `server` seria a entrada;
2) 🧭 `app` seria a primeira triagem, dividida para tipo de paciente (clinico, pediatrico) que seria a url;
3) 📋 E direciona para tal médico que com a análise feita (métodos http, get, post, patch, put, delete - ou o próprio `routes`);
4) ↩ Routes faz a segunda triagem e direciona para o especialista conforme o método, que é o `controls`;
5) 👨‍⚕️ Controls não tem responsabilidade de resolver o problema, mas mostrar soluções, dar a avaliação de retorno, etc... (recebem req, chamam service, retornam res);
6) 💊 O problema é resolvido com os tratamentos, que seria os `services`, os quais o controls indica e recebe o "feedback" se o tratamento está funcionando ou não (os return `status()`). Ele contêm a regra de negócio;


<br>


## Controls


<br>

### Service


<br>


