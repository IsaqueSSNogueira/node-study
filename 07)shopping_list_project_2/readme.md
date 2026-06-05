
# Sobre

- Esse projeto não está incluso nas aulas, mas é algo a parte que estou montando na intenção de treinar de forma prática o que está sendo estudado. Na aula passada está o conteúdo aprendido... já aqui irei montar e anotar sobre o projeto, além de incrementar conteúdos a mais que vale a pena comentar.


## 📰 O projeto

- Esse projeto aprimora o primeiro projeto, que é a lista de supermercado que recebe dados do servidor e renderiza. NEsta versão é incluida mais funcionalidades a ela, como adicionar, editar e apagar itens. Foco aqui não é em beleza, mas aplicar de forma engajante o que venho estudado, mas diferente da anterior, possui um toque de entrega de produto com soluções completas;


### 📥 Para rodar o projeto na sua máquina

```
1. Clone o repositório:
>> git clone https://github.com/IsaqueSSNogueira/node-study.git

2. Acesse a pasta do projeto:
>> cd Node.js\stack-mobile_course\07)shopping_list_project_2\back

3. Instale as dependências do backend:
>> npm install

4. Inicie o servidor:
>> node server.js

5. Abra o frontend:
- Abra o arquivo HTML com o Live Server (recomendado)
ou
- Abra manualmente no navegador

6. Acesse no navegador:
O frontend irá consumir a API em:
http://localhost:3000
```

<br>

### 🔍 Pontos

- Numa requisição, sempre tem que haver uma resposta ao cliente `res`;
- Sempre números enviados vem como "string", converta com `Number()`;
- Fique atento a atualização de dados pra não acabar enviando dados desatualizados.


<br>

## 🧠 Relembrando


### JS 

- Sobre variaveis dentro de funções, utiliades interessantes
- Sobre querySelector com atributos, como `data's` `document.querySelector("tag[data-type=valor]")`;
- `.map((item) => {})` não salva por cima do array. Salve ele em uma variável ou diretamente na que está sendo fatorada (`itens = itens.map((item) => {...})`).