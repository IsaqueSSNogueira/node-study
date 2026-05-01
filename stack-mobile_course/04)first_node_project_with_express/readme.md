

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

<br>

2. Crie um arquivo `index.js`, é nele que vamos criar o servidor.

3. Com a pasta do projeto acessada no prompt, para rodar o servidor, basta digitar `> node index.js`.

## ✨ Primeiro projeto Node (com Express)



