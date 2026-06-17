
# 👨‍💻 MongoDB + Prisma


## 📈 Passo a passo (inicial)

### 1) 🌐 Crie uma conta no MongoDB;

<br>



### 2) 🖥 Crie um cluster

<br>

#### O que é um cluster?

- Um servidor (ou grupos de servidores) onde seu banco roda;
- Analogia:
	- Banco de dados = Uma pasta (ex: todolist);
	- Coleções = Arquivos (ex:users, tasks);
	- Cluster = Computador onde tudo fica salvo.
- É onde seu banco "vive";
- É chamado de cluster porque em sistemas reais não é só uma máquina rodando, é o servidor A, servidor B, servidor C, todos trabalhando juntos. Isso é um cluster.

<br>


#### Nome do cluster
- Sobre o nome do cluster atual (cluster0): O nome do cluster tende a não ser tão importante, o que importa mesmo é a connection string e o nome do banco (ex: todolist);
- Exemplo `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/todolist`, aqui: "cluster0" é nome do cluster (quase irrelevante) e "todolist" seu banco (isso sim importa).
- "Quando o nome do cluster importa?" Praticamente só quando você tem vários clusters ou/e em projeto grande / empresa. No meu caso, zero impacto;

<br>


#### Criação do cluster

1) Para criação, você pode escolher um dos 3 provedores, sendo empresas que alugam servidores na internet:
	- AWS (o que usaremos): Da Amazon;
	- Google Clound: Da Google ¯\_( ͡° ͜ʖ ͡°)_/¯;
	- Azure: Da Microsoft.

- Todos fazem a mesma coisa, fornecem computadores na nuvem para rodar sistemas;
- Por hora não faz muita diferença qual usar, mas para dar uma base de uma diferença real (mais avançado):
	- AWS: Mais popular, mais serviços, padrão da industria;
	- Google Clound: Integração forte com os serviços da Google, bom para dados/IA;
	- Azure: Forte em empresas grandes, integração com Windows/.NET.


2) Defina a região mais próxima (São Paulo ou Virginia);



<br>


connect 
network acess - allow acess from anywhere (ip liberado)
database acess > edit

seção cluster
collections > create a database 
insert document > add field (define tbm tipo)

// restart automatico
npm install nodemon -D
npx nodemon arquivo.js


// prisma
npm install prisma -D
npm install @prisma/client
npx prisma init


/prisma/schema.prisma
datsource db > provider: "mongodb"
url: "ENV:("")"
url+user+password+database


npx prisma generate

