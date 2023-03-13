# Development - Node.JS

# NodeJS
![](https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw-960x540.png.webp)

## Índice

- [O que é HTTP](#javascript--node)
  
- [Express,JS](#Express.js)
  - [Rotas](#Rotas)
  - [Parâmetros](#Parâmetros)
  - [Query parts](#QueryParams)
 
- [MySQL Básico](#controle-de-fluxo)
  - [Comandos básicos](#ComandosBásicos)
- [1° Projeto perguntas e respostas](#1°ProjetoGuiadeperguntas
)

>>>NODE.js é  um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de  forma autônoma, sem depender de um navegador, com ele é possivel criar praticamente  qualquer tipo de aplicação wbe desde serviços para sites estáticos e dinamicos, até API e sistemas baseados em microserviços.

 ### O que é HTTP

>HTTP (Hyper Text Transfer Protocol), é um protocologo de transferência que possibilita que as pessoas que inserem URL do seu site na web possam ver os conteúdos e dados que nele existem.

requisito + resposta

```javascript
var http = require("http");

http.createServer(function(requisico, resposta) {
    resposta.send("Bem vindo ao servidor");
}).listen(8181)
console.log("Meu servidor está rodando!");
```

**[⬆ voltar ao topo](#Índice)**

### EXPRESS.js

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

Comandos para instalação do express:

| comando | resumo|
|----|-----|
| node package manager| Baixa bibliotecas|
| npm -v | verção npm|
| npm init | inicia projeto node.js e cria pasta packjason.jsom|
| npm install express --save | Instala pacote/biblioteca express|

```javascript
const express = require("express"); // importando o express
const app = express(); // iniciando o express

    app.get("/", function (requisicao, resposta) {
        resposta.send("<h1>Bem Vindo ao Guia do Programador</h1>");
});
```
### Rotas

Uma rota em uma API é um “caminho” que será “chamado” por uma aplicação ou cliente e responderá alguma informação. Cada rota pode ter uma ou mais funções, e ela deve ser única na API, ao receber uma chamada ela faz todo o processamento necessário para retornar os dados que foi solicitado.

```javascript
app.get("/", function (requisicao, resposta) {
    resposta.send("<h1>Bem Vindo ao Guia do Programador</h1>");
});  // configuração de rotas
```

### Parâmetros
São valores que passamos pela url do nosso servidor, exemplo :

```javascript
app.get("/ola/:nome", function (requisicao, resposta) {
    // REQUISICAO => DADOS ENVIADOS PELO USUÁRIO
    // RESPOATA => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    var nome = requisicao.params.nome;
    resposta.send("<h1>Oi " + nome + "</h1>");
});
```
### Query Params
O query params é outra forma de passar valores pela url mas, dessa forma ao invés de passar apenas um parâmetro por rota, podemos passar vários!

```javascript
app.get("/canal/youtube", function (requisicao, resposta) {
    var canal = requisicao = requisicao.query["canal"]

    if(canal){
        resposta.send(canal);
    }else{
        resposta.send("nenhum canal fornecido!");
    }
    resposta.send(canal);
});
```
**[⬆ voltar ao topo](#Índice)**
---

### MySQL Básico

O MySQL foi originalmente lançado em 1995. Desde então, já sofreu algumas mudanças em relação à propriedade/administração, pertencendo desde 2010 à Oracle Corporation. Agora que a Oracle está no comando, o MySQL continua sendo um software open-source, o que significa que você pode usá-lo e modificá-lo livremente.


Comandos Básicos:

> SELECT

O comando select é bastante simples e, serve para você, mostrar os dados da tabela. Sua sintaxe pode ser utilizado de algumas formas, como:

SELECT * FROM NOME_DA_TABELA;

> INSERT

O comando insert é bastante simples de ser utilizado. Sua sintaxe é composta da seguinte forma:

INSERT INTO NOME_DA_TABELA (CAMPOS_QUE_DESEJA_INSERIR_DADOS) VALUES (VALORES_DOS_CAMPOS).

> UPDATE

O comando update possui a sintaxe muito similar ao do INSERT, mas é utilizada para atualizar registros do banco de dados.

UPDATE NOME_DA_TABELA SET campo1 = valor1, campo2 = valor2.

> DELETE

O comando delete nunca deve ser utilizado sem a clasula WHERE. Caso contrário, irá deletar todos os registros da tabela. Sempre que você deseja apagar um registro, provalvelmente quer apagar um em espeficio. Assim, sempre é importante usar o WHERE, conforme o exemplo abaixo.

DELETE FROM NOME_DA_TABELA WHERE id = VALOR_DO_ID;

**[⬆ voltar ao topo](#Índice)**
---

## 1° Projeto Guia de perguntas

> Nesta etapa foi desenvolvido um prot´tipo pratico de criar uma plataforma de perguntas e respostas, utilizando Express com mysql, utilizando node.js com HTML e CSS e o basico de bootstrap.



![Projeto grua perguntas](https://drive.google.com/file/d/1VPsgIfEGK7iUoq40Yeo356Qn1oCPHcaE/view?usp=share_link)

[perguntas e respostas](https://drive.google.com/file/d/13gVXgmsi3Gn_cTycNJlQm8pRWhxBLA4Y/view?usp=share_link)