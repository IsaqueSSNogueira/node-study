
# Etapas Finais 


## Hospedar servidor

- Estando trabalhando com Node + Express + MongoDB Atlas, o caminho mais simples é hospedar o backend no **Render**;

- O fluxo seria: `GitHub -> Render -> seu Node/Express online -> MongoDB Atlas`;

## Passo a passo

### 1 - Suba o backend para o GitHub
- Não suba o `.env`;
- No `gitignore` > `.env | node_modules`.

### 2 - No Render
- Crie um **Web Service** e conecte o repositório do Github;
- Como seu `server.js` está na raiz do `back`, você pode configurar o **Root Directory** como `> back` se o repositório tiver frontend e backend juntos;


### 3 - Comandos no Render

```
// Build Command
npm install

// Start Command
node server.js
```


### 4 - Variável do MongoDB

- Você não coloca seu `.env` no GitHub;
- No Render, vai em Environment Variables e coloca: `MONGO_URI=mongodb+srv://...`;
- Seu código `mongoose.connect(process.env.MONGO_URI)` continua exatamente igual;

### 5 - PORTA

- Uma mudança importante;
- Se hoje você tem:
```
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})

``` 
- No Render você deve usar a porta fornecida pelo ambiente:
```
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
	})
```


### 6 - Depois você troca o frontend 

- Hoje temos `const res = await fetch("http://localhost:3000/users/...")`;
- O Render vai lhe entregar algo como `https:/seu-backend.onrender.com`
- E você passa a usar `fetch("https://seu-backend.onrender.com/users/${id}")`;
- E aí seu projeto inteiro passa a conversar com o backend hospedado.



