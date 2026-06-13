
# 🌆 Conectando a um database externo (BACKEND - parte 3)

- Foco em conexão com banco de dados. Devido a mudança que irá haver nos services e integração dos models, projeto se separou da parte 2 (que focava na separação do index.js em *arquitetura em camadas*).

<br>

<!-- 1 -->

## 1) 🤔 Por que sair de "dados em memória" para "banco de dados externo"?


- Hoje os dados do seu app funciona assim:

```
const users = [ ... ]
``` 


### ❗ Problema

- Quando o servidor reinicia -> **Perde tudo 🎈**;
- Não escala;
- Não é realista para mercado, não supre necessidade real.

### 🗃 Com banco

- Dados ficam **persistidos**;
- Você separa responsabilidades;
- Backend vira de verdade um serviço (se não for para haver um banco externo, não faz sentido construir um backend, iria trabalhar localmente).


<br>

<!-- 2 -->

## 2) Conceito principal


- Antes:  `conttroler > mexe direto no array`;
- Depois: `conttroler > service > database`



### 📌 Fluxo completo

- `req > conttroler > service > database > service > controller > res`



<br>

<!-- 3 -->

## 3) 📮 Tipos de bancos


### MongoDB (noSQL)

- JSON-like;
- Mais fácil pra quem vem de JS;
- Flexível;
- Muito usado com Node.


### SQLLite (SQL)

- Banco em arquivo;
- Mais simples que MySQL/Postgres;
- Bom para começar com SQL.


*Recomendação: Começar com MongoDB, vai bater mais com meu projeto atual*


<br>

<!-- 4 -->

## 4) 🤓 O que vou aprender

Quando você implementar banco, você vai aprender:

1) Modelagem de dados;
2) Persistência;
3) CRUD real;
4) Assicronismo (`async/await`);
5) Erros reais (não mockados).


<br>

<!-- 5 -->

## 5) 👨‍💻´Como seu código vai mudar

1) Antes, em memória:
```
export const getData = (id) => {
	return users.find(user => user.id === id)
}
```

2) Depois, com banco:
```
export const getUserById = async (id) => {
	return await user.findById(id)
} 
```

- Vira async;
- Usa banco;
- Pode falhar de verdade.
<br>


## 6) 💯 New Layer - Model

Você vai criar algo assim:

```
// models/User.js

import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
	text: String,
	description, String,
	completed: Boolean
})

const userSchema = new mongoose.Schema(`{
	name:String,
	password: String,
	tasks: [taskSchema]
})

export default mongoose.model("User", userSchema)
```

Isso define:

- Como os dados são salvos;
- Estrutura de dados.


<br>

<!-- 7 -->

## 7) 🌐 Conexão com banco

```
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/todolist")
```

Seu service depois do banco:
```

import user from "../model/User.js"


export const createNewTask = async (userId, text) => {

	const user = await User.findById(userId)

	if(!user) return null

	const task = {
		text,
		description: "",
		completed: false
	}

	user.tasks.push(task)
	await user.save()

	return task
}


```

<br>

## 8) 🔥 O que mais muda
 
- Tudo vira async:
```
// Controller
const newTask = async (req, res) => {
```

- Você precisa tratar erro:
```
try {
   ...
} catch (error) {
   return res.status(500).json({ message: "Erro interno" })
}
```

<br>

## 9) 🧠 Mudança de mentalidade

- Antes "vou pegar um array e modificar";
- Agora "vou consultar o banco, validar, modificar e persistir".

*👉 Isso é backend de verdade!*

<br>

## 10) Ordem ideal pra você implementar

Segue EXATAMENTE isso:

1) Instalar: `npm install mongoose`;
2) Criar conexão com banco;
3) Criar Models (User + Task);
4) Refatorar Services (usar banco);
5) Refatorar Controllers (async + try/catch);
7) Testar tudo (Postman / frontend.

<br>


## 11) 😯 Bônus - Simplificando

1) 📈 Escalar: Continuar funcionando bem mesmo com muitos usuários/dados;

2) 🤖 JSON-like: Parece JSON, as internamente é BSON (versão otimizada). Você envia JSON e ele salva em formato parecido;

3) 🖨 SQL: Tabelas separadas e baseado em relacionamento (user_id). Usar em sistemas complexos:
``` 
Users
id | name

Tasks
id | user_id | text
```
<br>

4) 📁 NoSQL: Tudo junto, mais flexível e próximo do modelo JSON. Usar em apps rápidos/flexíveis;

5) 📝 Modelagem: Como organizo meus dados no banco (o que existe e como se relaciona):
```
User {
  name,
  tasks: []
}
```

6) 🚦 Assícrono: Banco demora um tempo para responder. Então `const user = await User.findById(id)` - "espera o banco responder". Sem isso o código quebra e dados vêm incompletos.

7) 🎯 CRUD - **C**reate / **R**ead / **U**pdate / **D**elete (bem auto explicativo 😅);

8) 🐱‍💻 Mockado: Fake/simulado. Não é real, é teste.


9) 🤯 Por que o Mongoose “sabe o que fazer”? Essa pergunta é muito boa, aqui tá o pulo do gato. 

- Quando você faz: `const user = await User.findById(id)`;
- Isso não retorna um objeto comum, retorna um **documento do mongoose**;
- Esse objeto tem “superpoderes”:
```
user.tasks.push(...)
await user.save()
```
- O que acontece por trás:
	- Ele guarda o estado original;
	- Você modifica (push);
	- Quando chama .save();
	- Ele compara o que mudou;
	- Atualiza o banco automaticamente

- Sim o Mongoose sabe exatamente o que mudou.


8) 🧩 Schema + push 
```
// Schema:
const userSchema = {
  name: String,
  tasks: [taskSchema]
}
```
- Diz: “user tem um array de tasks”.

- Quando vc faz:
```
user.tasks.push({
  text: "Estudar",
  completed: false
})
```
- Você está apenas mexendo num array normal.
- AMs qunado você faz:
```
await user.save()
```
- Aí o Mongoose **valida com o schema, transforma em formato do banco e salva**.


_//_
