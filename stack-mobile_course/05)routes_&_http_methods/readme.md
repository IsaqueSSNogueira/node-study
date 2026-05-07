
# Sobre essa aula

Aprenderemos sobre a base de Rotas e dos métodos http.

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
- `async` : Define que a função será assíncrona (ela sempre vai retornar um Promisse);
- `await` : Faz esperar a resposta pra depois continuar rodando o código da função. O await não trava o programa inteiro, ele só pausa dentro da função async (o código continua rodando fora, só a função async "espera"). Isso deixa o código mais legível que `.then()`;
- Fluxo: function > res > data > renderização.


### Diferença entre métodos na sintaxe

- `get` : Só coleta dados, não possui o `body`, mas sempre carrega o `res` e `data` (curiosidade, é o valor padrão);
- `post` : É definido o método, o headers e possui o body;
- `put` : É definido o método, o headers e possui o body, geralmente é enviado id via url para marcar qual item será atualizado;
- `delete` : Não precisa de body, apenas do método e é capturado via url qual item será dleetado; 


### Exemplos

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
- `headers: {}` : São informações sobre os dados, enquanto o `body` são os dados em si. Tipo receber uma encomenda, a encomenda é o body, enquanto etiqueta sobre é os headers. São necessários no `POST` e `PUT` 
- Se tiver isso no front `headers: {"Content-Type": "application/json"}`, no back precisa `app.use(express.json())`.


#### Atualizar item

```
async function updateItem(id) {
  await fetch(`http://localhost:3000/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: item.value,
      valor: Number(preco.value),
      vendidoA: vendidoA.value,
      quantidade: Number(quantidade.value)
    })
  })
}
```


#### Deletar item

```
async function deleteItem(id) {
  await fetch(`http://localhost:3000/${id}`, {
    method: "DELETE"
  })
}
```

<br>

## Aplicações


### Coletar algo da requisição (node.js)

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


