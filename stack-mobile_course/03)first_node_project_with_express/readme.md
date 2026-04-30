

# 👨‍🏫 Sobre esta aula

- Nessa aula vamos aprender a criar o nosso primeiro projeto Node do zero, a criar o nosso primeiro servidor. 


## 🚄 Express

Para isso, vamos precisar instalar o Express no nosso projeto.  O Express é uma framework, ou seja, uma biblioteca que fornece recursos para que a gente consiga construir nossa aplicação. 
- Express é uma ferramenta que simplifica MUITO criar servidor com Node;
- Fornece recursos como http, roteamento para criar rotas na aplicação, midwares, recurso importantes como protocolos de rede, entre outras funcionalidades para construir a base do servidor, ou seja, a estrutura dorsal.

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
- Dificil de escalar;
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


### 🧩 Conceitos importantes citados:

- 🌐 HTTP: Comunicação entre cliente (browser/app) e servidor;

- 🛣 Rotas: 
```
app.get("/login", ...)

/* ☝ isso significa: “Quando alguém acessar /login, executa isso aqui” */
```



