
# Sobre essa aula



## ROTAS

- Rotas são os “caminhos” que o cliente (navegador/frontend) usa pra falar com seu servidor.

```
// Estrutura básica
app.METODO("rota", (req, res) => {
  // lógica
})



// Exemplo
app.get("/profile", (req, res) => {
  res.json({ nome: "Isaque" });
});

```


## 🌐 GET, POST, PULL, DELETE

1. GET > Busca de dados (listar, pegar info);
2. POST > Enviar algo (login, cadastro);
3. PUT/PATCH > Atualizar dados existentes (editar perfil)
4. DELETE > Deletar dados

🧠 Insight chave de funcionamento

- GET é “passivo” 👉 ele acontece naturalmente ao carregar coisas (url, carregamento, fetch);
- POST/PUT/DELETE são “ativos” 👉 você decide quando executar (fetch).


## 📞 FETCH

- `fetch()` é uma função do JavaScript que faz requisições HTTP (tipo GET, POST…) pro seu servidor:
```
// front (forma moderna)
async function getProfile() {
  const res = await fetch("/profile");
  const data = await res.json();

  console.log(data);
}
```
- `async` e `await`:
- Fluxo: function > res > data > renderização.


### Login

```
async function login() {
  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: "teste@email.com",
      senha: "123"
    })
  });

  const data = await res.json();
  console.log(data);
}
```

- Isso chama -> `app.post("/login", ...)`;
- Se tiver isso no front `headers: {"Content-Type": "application/json"}`, no back precisa `app.use(express.json())`.



<br>

## Aplicações


### Coletar algo da requisição 

```
// precisa de aplicar o metódo
app.use(express.json());

// req.body
app.post("/login", (req, res) => {
  const { email, senha } = req.body;
});
```

### Rotas dinâmicas

```
// pegar id e aplicar conforme
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Usuário ${id}`);
});


// acessando
> /users/5


// retorna
> Usuário 5
```


