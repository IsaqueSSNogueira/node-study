

## 📦 Preparando terreno

1. Na pasta do projeto:

```
// </> bash

> npm init -y
> npm install express
```

- "init -y" cria o arquivo package.json, que guarda nome do projeto, dependências e scripts essencias;
- "install express" instala a biblioteca express no seu projeto, e de quebra, gera:
```
node_modules/
package-lock.json
```
- package-lock.json: Guarda versões exatas instaladas e garante que funcione em qualquer máquina;
- node_modules/: Onde ficam as libs instaladas, não sobe pro Git.


2. Crie um arquivo `index.js`, é nele que vamos criar o servidor.

3. Com a pasta do projeto acessada no prompt, para rodar o servidor basta digitar `> node index.js`.

<br>

## ✨ Primeiro projeto Node (com Express)

Primeiro servidor:
```
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

- `const express = require("express")` : Importa a biblioteca express;
- `const app = express()` : Cria uma instância com comando `express()`, a base para a aplicação, armazenando ele na constante `app`;
- `app.get('/', (req, res)) => {...}` : Acessa rota HTTP de busca de dados do servidor (get), sendo "/" a padrão/home, muitas vezes atribuida a página inicial. `req` representa toda a requisição HTTP, guardando dados enviados da requisição (apesar de ser busca, podem ser enviado dados além dos já lançados por padrão na requisição, como `req.params`, `req.query`, `req.body`). `res` é o retorno ao cliente, podendo ser definido por algumas formas, como em json;
- `res.send("Servidor rodando 🚀")` : Resposta ao usuário, por ser chamada na home e não haver nenhuma condição para ela ser despertada, é lançada automática ao entrar (é executada sempre que essa rota é acessada, então é "automática"). Poderia ser em json, mas da forma que está ele acaba renderizando diretamente caso você acesse o servidor no navegador;
- `app.listen(3000, () => {...})` : É o que desperta nosso servidor, ele o inicia e faz escutar requisições/pedidos (permitindo receber pedidos e enviar respostas). A porta 3000 é um canal que recebe e envia esses dados, geralmente esse valor em especifico é atribuido a testes (`80` HTTP, `443` HTTPS). O código interno `console.log(...)` serve para verificar se flui tudo certo, o primeiro checking do código.

### Comando para rodar

- Prompt: `> node index.js`;
- Node é um programa, ele precisa estar instalado. Tanto local quanto servidor precisam dele;
- Servidor é só outra máquina rodando seu código e hospedar é deixar esse processo rodando sempre;
- Você vai ver que nos próximos projetos que integrar o node, você irá tanto abrir o front quanto colocar o servidor para rodar no Node, fazendo ele ouvir e responder os pedidos.


### Considerações

- `const express = require("express");` é CommonJS, padrão tradicional do Node. O ideal posteriormente usar por módulos `import express from "express"`, mais moderno (assim como você já desenvolveu anteriormente), definindo no package.json esse modelo e implementando no código.


<br>

