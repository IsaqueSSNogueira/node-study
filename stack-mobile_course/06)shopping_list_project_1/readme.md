
# Sobre

- Esse projeto não está incluso nas aulas, mas é algo a parte que estou montando na intenção de treinar de forma prática o que está sendo estudado. Na aula passada está o conteúdo aprendido... já aqui irei montar e anotar sobre o projeto, além de incrementar conteúdos a mais que vale a pena comentar.


## 📰 O projeto

- Esse projeto contempla o primeiro uso prático de integração de um `servidor local + frontend` em algo interessante, sendo uma lista de supermercado que recebe dados do servidor e os renderiza. Essa é a primeira versão, posterioremente irei criar outra usando esta como base, mas integrada com outros métodos HTTP para gerar mais funcionalidades a ela, como adicionar, editar e apagar itens. Foco aqui não é em beleza e nem entrega de produto, mas aprender mais e aplicar de forma engajante o que venho estudado.


### 📥 Para rodar ele em sua máquina


```


```


<br>

## 🧩 Conteúdo a mais

### 🕵️‍ CORS

- Durante o projeto, a requisição não estava sendo bem-sucedida, pois o navegador bloqueava o acesso à API quando o frontend era executado localmente (file://);
- Para resolver isso, é possível rodar o frontend em um servidor (ex: Live Server) ou habilitar o CORS no backend.
- O CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança implementado pelos navegadores que controla quais origens podem acessar recursos de uma API.
- Para instalar, no projeto: `npm install cors`;
- No backend:
```
import express from "express"
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())
```


### 🔍 Pontos

- Códigos dentro de uma `função async` muitas vezes só são rodados quando a promessa retorna, podendo travar os debaixo.

<br>

## 🧠 Relembrando

### HTML 

- Tabelas:
```
1. table;
2. caption;
3. thead, tbody, tfoot (se tentar envolver com div, ele quebra);
4. tr (linha);
5. (células) - th (para titulos), td (conteúdo, rodapé).
``` 

### JS 

- createElement/appendChild:
- `toFixed()` :