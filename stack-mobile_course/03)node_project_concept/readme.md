

# Sobre esta aula

- Nessa aula vamos aprender a criar o nosso primeiro projeto Node do zero, a criar o nosso primeiro servidor e entender como ele funciona.


## 🚄 Express

Para isso, vamos precisar instalar o Express no nosso projeto.  O Express é uma framework (uma biblioteca com estrutura opinativa) que fornece recursos para que a gente consiga construir nossa aplicação. 
- Express é uma ferramenta que simplifica MUITO criar servidor com Node;
- Fornece recursos como http, roteamento para criar rotas na aplicação, middleware, recursos importantes relacionados à comunicação de rede, entre outras funcionalidades para construir a base do servidor, ou seja, a estrutura dorsal.

### 🦥 Sem Express (Node Puro)
```
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home");
  }
});

server.listen(3000);
```

Funciona, mas:
- Verboso;
- Difícil de escalar;
- Chato de organizar.


### ⚡ Com Express (limpo e poderoso)

```
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(3000);
```

Aqui você ganha:

- Rotas simples;
- Código mais limpo;
- Estrutura profissional.

<br>
**Express NÃO substitui o Node → ele usa o Node por baixo**

```

// node puro
if (req.url === "/user" && req.method === "GET") {
  ...
}

// express
app.get("/user", ...)
```

- Ele basicamente transforma **condicionais + parsing manual** em **métodos semânticos prontos**.

<br>

### 🧩 Conceitos importantes citados:

- 🌐 HTTP: Comunicação entre cliente (browser/app) e servidor;

- 🛣 Rotas (Veja o exemplo):
```
app.get("/login", ...)

/* ☝ isso significa: “Quando alguém acessar /login, executa isso aqui” */
```

- 🔁 Middleware: Um filtro/processador antes da resposta final, interceptando a requisição. Exemplo:

```
app.use((req, res, next) => {
	console.log("Passou aqui")
	next();
})
```

### 🧠 Fluxo do acesso ao servidor

Quando alguém acessa ao servidor:

1. Usuário faz requisição (ex: entra no site, envia dados);
2. Express recebe;
3. Passa pelos middlewares;
4. Cai na rota certa;
5. Servidor envia a resposta ao cliente.


## 🔍 Biblioteca VS Framework

- Biblioteca = Conjunto de funções que você usa quando quiser. Você decide estrutura, fluxo, organização;
- Framework = Também oferece recursos, mas define o fluxo e a estrutura da aplicação. Já tem um “esqueleto”, você encaixa seu código dentro. Ela define quando seu código roda, onde ele fica ecomo ele se organiza.