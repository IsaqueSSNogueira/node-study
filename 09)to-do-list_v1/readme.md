
# 🌆 Construindo um servidor para um projeto maior (BACKEND - parte 1)

- Foco em consolidar e expandir conceitos aprendido, utilizando um projeto maior para isso. Posteriormente, irei focar na separação de arquivos do servidor (server, routes, controlls, services, models, etc...) e na integração a um banco de dados e na hospedagem do projeto (`10)new_concepts_3`).


### Demonstrativo visual final do projeto

<img src="src/project-image.png" style="width:500px">



## ➡ Fluxo completo

- Request;
- Métodos;



### 🛣 Routes

- Rota: "O que acontece se alguém acessa tal url";
- Combina os metódos HTTP (get, post, put, delete) com uma url (endpoint).

#### Ações

- 📌 `req` (request): Tudo que vem do cliente:

```
req.params // → parâmetros da URL (/users/1)
req.body // → dados enviados (POST/PUT)
req.query // → query string (?name=isaque)
```

- 📌 `res` (response): O que você responde:

```
res.send() // → resposta simples
res.json() // → resposta em JSON (mais comum)
```

#### Organização

- 🧠 A ideia principal: Rotas NÃO devem ter lógica pesada. Elas só **recebem a requisição**, **chamam outra camada** (controller) e **devolvem resposta**;
- Dentro do `routes/user.routes.js`:

```
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// só delega 👇
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
```

- No app.js:
```
const express = require('express');
const app = express();

const userRoutes = require('./routes/user.routes');

app.use(express.json());

// prefixo
app.use('/users', userRoutes);

app.listen(3000, () => console.log('Servidor rodando'));
```

<br>


## Respostas HTTP

1) `201` (Created): Sucesso na requisição da criação de um novo recurso (como um novo usuário, arquivo ou registro em banco de dados);
2) `209`: Criação de registro;
3) `200`: Login/busca dados ou OK;
4) `204`: Sucesso sem conteúdo (não pode ter body, usado o `.end()`);
5) `404`: Usuário/item não existe;
6) `409`: Conflito de dados (usuário já existe).

7) `400`: Erro do cliente (dados inválidos);
8) `401`: Não autenticado;
9) `403`: Sem permissão;
10) `404`: Não encontrado;
11) `500`: Erro no servidor;


- Para enviar um status http na response, para encadear o `.status()` antes do `.json({})`/`.send()`. Exemplos: 

`res.status(404).json({erro: "Usuário não encontrado"})` 
`res.status(200).json({message:"Login efetuado"})`

- Por padrão o backend envia status 200 (pode omitir se quiser);
- Sempre use return em erros;
- *Nunca envie a senha para o frontend*.


<br>

## A mais

-  `res.status(204).end()` -> Encerra a requisição sem enviar dados ao cliente (não envia `body`);
- Muito comum em API's REST (ex: em retorno de `delete`);
- Retorno `204 No Content` = deu certo, mas não tem nada pra retornar;
- Importante: Só se encerra uma vez, se o `res` foi chamado com um método de envio (send, json, end), entao a requisição é encerrada. A diferença é que em um é enviado dados e no outro se encerra apenas:
```
.json() → envia JSON e encerra
.send() → envia dados e encerra
.end() → só encerra
```