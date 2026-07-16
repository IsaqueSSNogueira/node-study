
# Instalação do Node


## 📥 Download

- Baixe o Node no site oficial, prioridade a versão LTS;
- Siga o passo a passo da instalação;
- Ele já carrega consigo o gerenciador de pacotes Node, o NPM;
- Teste de versão no terminal:
```

// versão atual instalada do Node 
> node -v
. v20.16.0

// versão npm
> npm -v
. 10.8.1

```

## O que o node e o npm são? 🤔

- Como sabemos, Node é um ambiente de execução do javascript fora do navegador;
- Já o NPM é um gerenciador de pacotes que vem junto com o node, ele instala, atualiza e gerencia bibliotecas feitas pela comunidade 😎
```
// Como exemplo, isso baixa uma biblioteca pronta pra você usar no seu projeto;

> npm install express
```
- Ou seja, Node é o ambiente de execução (do js fora do navegador) e npm é a lojinha que você baixa e integra bibliotecas no seu projeto. **Por isso o node é baixado apenas uma vez, mas bibliotecas como express e mongoose são instaladas em cada projeto individual** (existe forma de instalar global, mas por enquanto o importante é saber apenas a base).


## Para projetos 🎯

- O NPM é uma lojinha de códigos prontos, certo? Mas cada projeto tem suas próprias dependências. Isso é muito importante de se entender 👉 cada projeto é um "mundo separado"; 
- Por isso existe o `npm init -y`. Rodando ele no terminal cria o `package.json`, que é uma lista de dependências e configurações do projeto. 


<br>

## Link da aula:


 [Clique aqui para ir para o Youtube!](https://youtu.be/KGss9Yj7ZbY?si=juainvQooFyMhYAl)