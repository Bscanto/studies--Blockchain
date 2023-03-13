

# <h1>NodeJS
![](https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw-960x540.png.webp)

## <h1>Índice

- [NodeJS](#nodejs)
  - [Índice](#índice)
  - [Introdução](#introdução)
    - [O que é HTTP](#o-que-é-http)
    - [EXPRESS](#express)
    - [Rotas](#rotas)
    - [Parâmetros](#parâmetros)
    - [Query Params](#query-params)
    - [MySQL Básico](#mysql-básico)
  - [Projeto Guia de perguntas](#projeto-guia-de-perguntas)
  - [ES6 (Novas funcionalidades)](#ES6-Novas-funcionalidades)
    - [Const](#const)
    - [Diferença entre VAR e LET:](#diferença-entre-var-e-let)
    - [JSON Encurtados](#json-encurtados)
    - [Operador Spread](#operador-spread)
    - [Desestruturação](#desestruturação)
    - [Arrow function (funções flecha)](#arrow-function-funções-flecha)
    - [Find](#find)
    - [Template Literals](#template-literals)
  - [Programação Assíncrona](#programação-assíncrona)
    - [O que é programação síncrona](#o-que-é-programação-síncrona)
    - [O que é programação Assíncrona](#o-que-é-programação-assíncrona)
    - [Programação assíncrona em javascript](#programação-assíncrona-em-javascript)
      - [Callbacks](#callbacks)
      - [Promises](#promises)
      - [Async/Await](#asyncawait)
  - [Orientação a objeto com Javascript](#orientação-a-objeto-com-javascript)
  - [](#)
  - [Introdução a API REST con node.js](#introdução-a-api-rest-con-nodejs)
  - [](#-1)
  - [Consume de API REST com Axios](#consume-de-api-rest-com-axios)
  - [](#-2)
  - [Autenticação de API Rest com JWT](#autenticação-de-api-rest-com-jwt)
  - [](#-3)
  - [Consumo de API Rest com JWT](#consumo-de-api-rest-com-jwt)
  - [](#-4)
  - [Documentação com API Rest](#documentação-com-api-rest)
  - [](#-5)

>NODE.js é  um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de  forma autônoma, sem depender de um navegador, com ele é possivel criar praticamente  qualquer tipo de aplicação wbe desde serviços para sites estáticos e dinamicos, até API e sistemas baseados em microserviços.

## <h1>Introdução
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

### EXPRESS

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

Comandos para instalação do express:

| comando | resumo|
|----|-----|
| node package manager| Baixa bibliotecas|
| npm -v | versão npm|
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

[Pasta arquivos HTTP e Express](https://github.com/Bscanto/studies--trainings/tree/main/3-Application%20development/DevelopmenJavaScripe%26node.js/Node.JS/1-Inicio%2C%20Express%20e%20http)

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

## <h1>Projeto Guia de perguntas

[Pasta com projeto guia perguntas](https://github.com/Bscanto/studies--trainings/blob/main/3-Application%20development/DevelopmenJavaScripe%26node.js/Node.JS/2-(Projeto%231)Guiaperguntas/image%20perguntar.jpeg)

> Nesta etapa foi desenvolvido um protótipo pratico de criar uma plataforma de perguntas e respostas, utilizando Express com mysql, utilizando node.js com HTML e CSS e o basico de bootstrap.



[Projeto guia perguntas Imagem](https://github.com/Bscanto/studies--trainings/blob/main/3-Application%20development/DevelopmenJavaScripe%26node.js/Node.JS/2-(Projeto%231)Guiaperguntas/Pagina%20perguntar.jpeg)

[perguntas e respostas Imagem](https://github.com/Bscanto/studies--trainings/blob/main/3-Application%20development/DevelopmenJavaScripe%26node.js/Node.JS/2-(Projeto%231)Guiaperguntas/Pagina%20principal.jpeg)





**[⬆ voltar ao topo](#Índice)**

---
## <h1>ES6 Novas funcionalidades


### Const
> Uma variável VAR serve para armazenar um valor na memória de qualquer tipo número um texto ou objeto, por exemplo você pode mudar o valor de uma variável em qualquer momento do seu programa.
Já quando eu declaro uma constante com um nome  e que tem um valor,  em nenhum momento do
meu programa eu posso mudar essa constante (const). 
Por isso é muito para nao mudar valores por engano, então eu não corro o risco de perder uma instância ou informações importantes para meu aplicativo roda.



### Diferença entre VAR e LET:

```Javascript
var nome = "Bruno"; // Global
let nome2 = "Victor"; // Global
// Global: Todo mundo pode usar!
// Loca: Só o Bloco onde ela foi declarada pode usar!

// VAR só tem dois escopos: Global e Local
//LET também tem esses escopos: Global e Local e Bloco
function func1(){
    var sobrenome = "canto"; // Local
    let sobrenome2 = "Oliveira"; // Local
    console.log("Oi " + nome + " " + sobrenome);
    console.log("Oi " + nome2);
}

function func2(){
    console.log("Ola "+ nome);
}

func1();
func2();

console.log(nome);
console.log(nome2);
```
### JSON Encurtados

```Javascript
var nome = "Bruno Canto";
var idade = 35;
var Empresa = "Compass";

var user = {
    //Normalment usaria essa sintese
     nome: nome,
     idade: idade,
     empresa: empresa

    //assim pode ser encurtado que os atributos das variaveis
    nome,
    idade,
    empresa
}
consolo.log(user);

```

### Operador Spread

> Operador Spreat simplesmente copia os campos de um objeto ( ex. capos dentro do objeto empresa) e colar essecampos dentro de outro objeto.
```Javascript
var nome = "Bruno Canto";
var idade = 35;

var Empresa = {
    nome: "Guia do programador",
    cidade:"São Paulo",
    site:"guiadoprogramador",
    email:"guia@programador.com"
}

var user = {
    // Normalmente se usaria!!!

   nome,
    idade,
    empresa: empresa.nome,
    cidade: empresa.cidade,
    site: empresa.site,
    email: empresa.email
    
    //com o operador Spread
    nome,
    idade,
    ...empresa // simplesmente usando essa sintese (... + o nome do objeto a ser chamado)


}
consolo.log(user);
```

### Desestruturação

>A desestruturação como se fosse um extrator que vai dentro do objeto e extrai os campos para você e transforma esses campos em variáveis que você pode utilizar.


```Javascript
var user = {
    nome: "Bruno Canto",
    prof: "programador",
    empresa: "Guia do Programador",
    curso: "Formação node.js"
}
//(digitar o nome da variavel,depois digitar o nome do objeto ponto o nome do campo...)
var nome = user.nome; 
 console.log(nome);

// Com recurso a desestruturação usado com qualquer palavra chave( var, let e const)
var { nome,prof, empresa } = user; // Você que que dentro do objeto user você pegue o campo nome e transforme ele em uma variavel.

console.log(nome);
```

### Arrow function (funções flecha)

>São funções que  a sintaxe dela parece uma flecha, você usa uma flechinha para definir elas. é a mesma coisa que uma função so que com uma escrita diferente mais reduzida.

```Javascript
// uma função normal 
function( soma (a,b)){
    console.log(a + b);
}
// Ou...
var mult = function (a,b) {
    console.log(a * b);
}

// com a function Arrow 
var mult3 = (a,b,c) =>{
    console.log(a*b*c);
}
 
//quando ela recebe uma linha 
var mult3 = a => console.log(a*2);
//Também pode dar return nas Arrow function
var mult3 = (a,b,c) => a * b * c;
var resultado = mult3(2,3,4);
console.log(resultado);

```
### Find

>É um metodo que serve para você buscar um único registro dentro de um array

```Javascript
var victor = {
    nome: "Victor Lima";
    empresa:"guia do programador",
    salario: 1000
}// Verificar
var david = {
    nome: "David";
    empresa:"Umbler",
    salario: 800
}// Verificar
var erick = {
    nome: "Erick ";
    empresa:"Udemy",
    salario: 500
}// Verificar

var users = [victor, david, erick]

// Chamo o array.find, trabalha com uma Arrow functiom que retorna verdadeiro ou falso
var usuario = users.find(users => users.nome === "Victor Lima"); // Verificar();
//podendo inclusive usar operações
// var usuario = users.find(users => userssalario < 1000 && user.salario >500);
console.log(usuario);

```
 ### Template Literals

 > Esse é um recurso que organiza muito seu código, que facilita muito o trabalho com a concatenação entre strings e variaveis.


```Javascript
var nome = "Bruno Canto";
var sobre = " Fundador do Guia do programador ";

var frase = "Olá meu nome é " + nome + " e eu sou " + sobre + "."
console.log(frase);

// Usando o Template Literals
var nome = "Bruno Canto";
var sobre = " Fundador do Guia do programador ";

var frase = `Olá meu nome é ${nome} e eu sou ${sobre}`//Adicionando uma interpolação dentro da string ${} 
//(OBS: cuidar nas quebras de linha)
console.log(frase);
```
**[⬆ voltar ao topo](#Índice)**

---

## <h1>Programação Assíncrona
### O que é programação síncrona
> Programação sincrona é  a forma de programas onde cada  instrução , cada linha de codigo que você escrever, uma linha de código vai executar, quando ela for executada ela vai pasar para  proxima  e por assim vai adiante até o final do código. Executando na ordem que você definir.


### O que é programação Assíncrona
> Programação Assincrona, As coisas que você colocar nas suas instruções  elas vão acabar de ser executadas independente da ordem em que você escreveu, ela não depende da ordem que foi escrita.
Detalhe que na programação assíncrona as coisas são executadas ao mesmo tempo, então nesse exemplo, A(), B(), e C(), estejamsendo executadas ao mesmo tempo sem bloquear o fluxo da aplicação, sendo assim, elas poderiam ser finalizadas em qualquer ordem.

### Programação assíncrona em javascript

#### Callbacks
> Callbacks garantem que uma função não seja executada antes que uma tarefa seja concluída, mas logo depois dessa tarefa ser concluída. Elas nos ajudam a desenvolver código JavaScript assíncrono e evitam que tenhamos problemas e erros.

[Codigo exemplo](https://github.com/Bscanto/studies--trainings/blob/main/3-Application%20development/DevelopmenJavaScripe%26node.js/Node.JS/ES678/callbacks.js)

#### Promises
> Uma promise é um objeto que serve como uma “lacuna” para um valor. Esse valor é usualmente o resultado de uma operação assíncrona como uma requisição HTTP ou a leitura de um arquivo no disco. Quando uma função assíncrona é chamada ela pode imediatamente retornar um objeto Promise. Usando esse objeto, você pode registrar callbacks que executarão quando a operação ocorrer com sucesso ou com erros.
> É uma construção do JavaScript que representa um valor futuro desconhecido (apenas a "promessa" de um valor). Por conceito, uma promise é apenas o JavaScript "prometendo" retornar um valor. Esse valor pode ser o resultado de uma chamada de API, ou um objeto de erro de uma solicitação à rede que não funcionou. Sua garantia é a de que receberá "alguma coisa".
> 
[Codigo exemplo](https://github.com/Bscanto/studies--trainings/blob/main/3-Application%20development/DevelopmenJavaScripe%26node.js/Node.JS/ES678/promises.js)
#### Async/Await
> Async/await são a forma de escrever promises que nos permitam escrever código assíncrono que parece síncrono. Async/await são, de fato, apenas um adendo sintático que nos dá um modo de criar código mais fácil de se raciocinar a respeito, sem mudar a dinâmica subjacente.
> >Async/Await nos permitem usar generators para pausar a execução de uma função. Quando usamos async/await, não estamos bloqueando nada, pois a função está dando o controle de volta para o programa principal.

[Codigo exemplo](https://github.com/Bscanto/studies--trainings/tree/main/3-Application%20development/DevelopmenJavaScripe%26node.js/Node.JS/ES678)

**[⬆ voltar ao topo](#Índice)**

---

## <h1>Orientação a objeto com Javascript
###












**[⬆ voltar ao topo](#Índice)**

---

## <h1>Introdução a API REST con node.js

###











**[⬆ voltar ao topo](#Índice)**

---

## <h1>Consume de API REST com Axios
###












**[⬆ voltar ao topo](#Índice)**

---

## <h1>Autenticação de API Rest com JWT

###











**[⬆ voltar ao topo](#Índice)**

---

## <h1>Consumo de API Rest com JWT

###











**[⬆ voltar ao topo](#Índice)**

---


## <h1>Documentação com API Rest

###












**[⬆ voltar ao topo](#Índice)**

---