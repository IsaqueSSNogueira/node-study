
# 🌆 Novos conceitos 2 (BACKEND)


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

### Controls



### Service






### try / catch



### Status HTTP

- `200`:
- `201`: 
- `400`: 
- `404`: `return res.status(404).json({ error: "User not found" })`;
- `500`:


## JSON


- Objetos e arrays;
- Métodos (`.find`, `.map`, `.filter`):
- Tranformação de dados:


## Validação básica



## Banco de dados (pincelada)

- CRUD completo;
- Entender tabela/coleção;
- Relacionamento básico (mesmo que simples);
- Queries básicas.