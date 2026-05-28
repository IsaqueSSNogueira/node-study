
# 🌆 Novos conceitos 2 (BACKEND - parte 1)

- Foco em separação de arquivo, melhor estruturação e recursos conforme o projeto escala.


## ➡ Fluxo completo

- Request;
- Métodos;


## 🗃 Organização dos arquivos

- routes
- controllers;
- middleware básico:




### 🛣 Routes

- "O que acontece se alguém acessa tal url";
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

### Controls


<br>

### Service


<br>


## Respostas HTTP

1) `201` (Created): Sucesso na requisição da criação de um novo recurso (como um novo usuário, arquivo ou registro em banco de dados);
2) `209`: Criação de registro;
3) `200`: Login;
4) `404`: Usuário/item não existe;
5) `409`: Conflito de dados (usuário já existe).



- *Nunca envie a senha para o frontend*.