

# Sobre o curso

Este é um curso básico de Node.js, focado em construir base inicial para, posteriormente, se aprofundar nesta forma de utilizar o js para desenvolver o backend tanto para sites quanto para aplicativos mobile.

<br>


## 🤔 Principais características do Node:


### 👨‍💻 O que é Node.js?

- ❌ Ele não é uma linguagem de programação;
- ✔ Ele é uma plataforma (um software), de código aberto multiplataforma (consegue rodar em multiplos sistemas, seja Windows, Mac, Android, IOS) e por debaixo dos panos ele executa código javascript.

<br>

- Ele usa o motor V8 Javascript Engine (mesmo do Google);
- É escrito em C/C+;
- Utiliza um sistema chamado Event Loop.



### 🛠 Para que ele serve?

- É usado para criar parte do Back-end de aplicações Web e Mobile;
- Quais empresas utilizam Node.js em suas aplicações? > Microsoft, Netflix, Paypal, Walmart, Yahoo, IBM, GoDaddy;
- Ele é muito popular no mercado.

<br> 

### 💪 Vantagens do Node

- Ele é single-thread (usa apenas um núcleo do processador) e tem baixo consumo computacional como RAM e CPU;
- Ele é escalável, ideal para > APIs, sistemas com muitos usuários, apps em tempo real (chat, jogos);
- Pode trabalhar com muitas requisições simuntâneas;
- Modelo de Entrada e Saida não bloqueante (E/S): Pode trabalhar com multiplas funções de forma simultânea. Ele não espera finalizar uma requisição para ir trabalhando em outras, ele pode ir adiantando enquanto aguarda a resposta. E olha, mesmo com uma única thread ele consegue trabalhar de forma inteligente e otimizada;
- Comunidade ativa, isso faz muita diferença;
- Acesso a milhares de bibliotecas e módulos via NPM (Gerenciador de Pacotes Node - Node Package Manager), podendo integra-las para aperfeiçoar o projetos, sendo ambos montando em js;
- Baixo custos operacionais, ajudando na hospedagem;
- Por trabalhar com a linguagem JavaScript tem fácil compatibilidade e integração com outros frameworks JavaScript como React, React Native, entre outros. 


## 🤯 Event loop, o segredo do Node

Node é single-thread. Como ele aguenta várias requisições?

- Ele recebe várias tarefas (requisições);
- Se uma tarefa demora (ex: banco de dados, API);
- Ele não fica esperando parado, ele: Recebe a tarefa > Delega ações > Continua fazendo outras coisas > Quando a reposta volta, ele processa;
- Exemplo:
```
// código
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");


// Saida
A
C
B


/* setTimeout é delegado, Node continua rodando, depois ele volta e executa o callback */
```

<br>



### 😥 Desvantagens do Node

- Depedendo da aplicação ele pode ser mais lento que outras tecnologias de Back-end, como Java, C, PHP, entre outros. Por fazer tudo em apenas uma única thread, ele sofre em tarefas pesadas de cpu, como em processamente de imagens e cálculos pesados;
- Se a aplicação for muito grande, tem que otimizar muito bem para evitar esse problema. Isso geralmente não impacta projetos pequenos ou médios, mas para projetos grandes. Mas também dá para contornar isso com Workers (threads separadas), microserviços ou outras linguagens só para essa parte;
- Quem trabalha com outras tecnologias, a parte da familirização, integração e compatilidade com outras linguagens é mais complicada (da para implementar, mas não tão bem quanto com uma bibblioteca javascript).



<br>

## Link da aula:


 [Clique aqui para ir para o Youtube!](https://youtu.be/p9WpBHEXTms?si=qX9qqtGaBTmjfLFP)