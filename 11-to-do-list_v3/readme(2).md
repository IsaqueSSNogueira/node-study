
# 🌆 Conectando a um database externo - Base


## 🗃 MongoDB Atlas

Existem duas formas de integrar o banco de dados:

- ☁ Na nuvem, sendo mais fácil e recomendado para eu que estou iniciando. Você cria conta e usa online;
- 🏡 Local, mais chato no começo. Você instala direto na máquina.

<br>

## 🔄 Passo a passo (MongoDB)

<br> 

### 1) 💌 Criar conta

- Vá no site do MongoDB "https://www.mongodb.com";
- Crie uma conta;
- Plano gratuito - Free Tier.

<br>


### 2) 👨‍💻 Criar um cluster

Crie um cluster, que é tipo seu “servidor de banco”. Quando entrar:

- Clica em “Create”
- Escolhe: FREE e região qualquer (mais próxima melhor)


<br>

### 3) 💡 Crie um usuário do banco

- Irá pedir user e password;
- Será usado no código.


<br>

### 4) 🌐 Liberar acesso (IP)

- clica em Network Access e adiciona "0.0.0.0/0";
- Isso permite acessar de qualquer lugar (ok pra estudo)


<br>

### 5) 🔁 Pegar string de conexão

- Vai em: Database → Connect → Drivers;
- Você vai ver algo assim: `mongodb+srv://admin:123456@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`;


<br>
 


## 🧠 Node + Mongoose

### 📥 6) Instale o mongoose no projeto

- > `npm install mongoose`;

<br> 

### 📮 Conecte ao banco

```
import mongoose from "mongoose"

mongoose.connect("SUA_STRING_AQUI")
  .then(() => console.log("Banco conectado 🔥"))
  .catch(err => console.log(err))

```

### 🤓 Exemplo real

```
import mongoose from "mongoose"

await mongoose.connect("mongodb+srv://...")

const userSchema = new mongoose.Schema({
  name: String
})

const User = mongoose.model("User", userSchema)

// criar
const user = new User({ name: "João" })
await user.save()

// buscar
const users = await User.find()

console.log(users)
```