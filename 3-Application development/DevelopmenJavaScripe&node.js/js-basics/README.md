# Javascript & Node
![](https://sujeitoprogramador.com/wp-content/uploads/2019/08/jsjsjs.png)
## Javascript Básico para Iniciantes

## Índice

- [Javascript \& Node](#javascript--node)
  - [Javascript Básico para Iniciantes](#javascript-básico-para-iniciantes)
  - [Índice](#índice)
  - [Introdução](#introdução)
  - [Básico](#básico)
    - [Tipos  Variáveis](#tipos--variáveis)
    - [Tipos primitivos](#tipos-primitivos)
    - [Tipos de Referência](#tipos-de-referência)
- [Operadores](#operadores)
  - [Operadores aritméticos](#operadores-aritméticos)
  - [Operadores de comparação](#operadores-de-comparação)
  - [Operadores lógicos](#operadores-lógicos)
  - [Operadores de atribuição](#operadores-de-atribuição)
- [Controle de fluxo](#controle-de-fluxo)
  - [Laços de repetição (loops)](#laços-de-repetição-loops)
- [Objetos](#objetos)
  - [Objetos](#objetos-1)
  - [Construtores](#construtores)
  - [Math](#math)
  - [Strings](#strings)
  - [Date](#date)
  - [Arrays](#arrays)
  - [Arrays (Saiba mais clique aqui)](#arrays-saiba-mais-clique-aqui)
  - [Funções](#funções)
  - [Função(Saiba mais clique aqui)](#funçãosaiba-mais-clique-aqui)
 
## Introdução


JavaScript (JS) é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host (por exemplo, um navegador web) o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.

JavaScript tem uma biblioteca padrão de objetos, como: Array, Date, e Math, e um conjunto de elementos que formam o núcleo da linguagem, tais como: operadores, estruturas de controle e declarações. O núcleo do JavaScript pode ser estendido para uma variedade de propósitos, complementando assim a linguagem:



## Básico

### Tipos  Variáveis



|Tipos Variáveis | Resumo
|-------|-----
Var | Declara uma variável, inicializando com um valor.
let | Declara uma variável local de escopo do bloco, inicializando-a com um valor.
const | declara uma constante de escopo de bloco, apenas leitura.

  EXEMPLO:
* var
```javascript
var name = 'Canto';
console.log(name);
```


* let
```javascript
let name = 'Bruno';
console.log(name);
```
* const
```javascript
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
```

### Tipos primitivos 

|Tipos VPrimitivos | Resumo
|-------|-----
string | O objeto global String é um construtor para strings, ou uma sequência de caracteres.
numbers | Os valores representam números de ponto flutuante,  podem ser representados de forma decimal, fazendo uso de um ponto flutuante entre os algarismos, e não decimal .
boolean | Boolean é um tipo de dado que só pode assumir os valores true e false.
undefined |  Semelhante ao null, nós temos o tipo primitivo de dado undefined. Ele é designado automaticamente quando por exemplo, uma variável vazia é criada .
null | O tipo null pode ser utilizado para representar o nada ou o vazio .

### Tipos de Referência

|Tipos Referência | Resumo
|-------|-----
Objeto | Conjunto de atributos aninhados a uma variável, domina-se objeto
Arrays | É uma estrutura de dados para armazenar uma coleção de valores.
Função | É possivel declarar uma váriavel com uma função, podendo fazer operações e retornando o valor para a variável de declaração


**[⬆ voltar ao topo](#Índice)**

---

# Operadores

Em javascript (JS) temos diferentes tipos de operadores, usamos essesoperadores junto com nossas variáveis e constantes para criar expressões e com essas expressões podemos implementar lógicas e algorítimos, portanto aqui estão os diferentes tipos de operadores em JS


## Operadores aritméticos

Operador	|Descrição	|Exemplo
|---|---|---
Módulo (%)	|Operador binário. Retorna o inteiro restante da divisão dos dois operandos.|	12 % 5 retorna 2.
Incremento (++)	|Operador unário. Adiciona um ao seu operando. Se usado como operador prefixado (++x), retorna o valor de seu operando após a adição. Se usado como operador pósfixado (x++), retorna o valor de seu operando antes da adição.|	Se x é 3, então ++x define x como 4 e retorna 4, enquanto x++ retorna 3 e, somente então, define x como 4.
Decremento (--)	|Operador unário. Subtrai um de seu operando. O valor de retorno é análogo àquele do operador de incremento.	|Se x é 3, então --x define x como 2 e retorna 2, enquanto x-- retorna 3 e, somente então, define x como 2.
Negação (-)|	Operador unário. Retorna a negação de seu operando.	|Se x é 3, então -x retorna -3.
Adição (+)|	Operador unário. |Tenta converter o operando em um número, sempre que possível.	+"3" retorna 3.+true retorna 1.
Operador de exponenciação (**)| Experimental|	Calcula a base elevada á potência do expoente, que é, baseexpoente	2 ** 3 retorna 8.10 ** -1 retorna 0.1

## Operadores de comparação


Operador |	Descrição	| Exemplos que retornam verdadeiro
|----|----|----
Igual (==)	|Retorna verdadeiro caso os operandos sejam iguais.	|3 == var1 "3" == var1 3 == '3'
Não igual |(!=)	Retorna verdadeiro caso os operandos não sejam iguais.	|var1 != 4 var2 != "3"
Estritamente igual |Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.	|var2 > var1 "12" > 2
Maior que ou igual (>=)	|Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.|	var2 >= var1 var1 >= 3
Menor que (<)|	Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.	|var1 < var2 "12" < "2"
Menor que ou igual (<=)	|Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.	| var1 <= var2 var2 <= 5

## Operadores lógicos

Operador	|Utilização|	Descrição
|----|----|---|
AND lógico (&&)	|expr1 && expr2|	(E lógico) - Retorna expr1 caso possa ser convertido para falso; senão, retorna expr2. Assim, quando utilizado com valores booleanos, && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.
OU lógico (II)|	expr1 (II) expr2 | (OU lógico) - Retorna expr1 caso possa ser convertido para verdadeiro; senão, retorna expr2. Assim, quando utilizado com valores booleanos, (II) retorna verdadeiro caso ambos os operandos sejam verdadeiro; se ambos forem falsos, retorna falso.
NOT lógico (!)	| !expr	| (Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.

## Operadores de atribuição

Nome	|Operador encurtado	|Significado
|---|---|---|
Atribuição|	x = y	|x = y
Atribuição de adição	|x += y	|x = x + y
Atribuição de subtração	|x -= y	|x = x - y
Atribuição de multiplicação	|x *= y	|x = x * y
Atribuição de divisão	|x /= y	|x = x / y
Atribuição de resto|	x %= y	|x = x % y
Atribuição exponencial|	x **= y|	x = x ** y
Atribuição bit-a-bit por deslocamento á esquerda|	x <<= y	|x = x << y
Atribuição bit-a-bit por deslocamento á direita	|x >>= y	|x = x >> y
Atribuiçãode bit-a-bit deslocamento á direita não assinado|	x >>>= y	|x = x >>> y
Atribuição AND bit-a-bit|	x &= y	|x = x & y
Atribuição XOR bit-a-bit|	x ^= y|	x = x ^ y
Atribuição OR bit-a-bit	|x I= y	|x = x I y

[Pasta Operadores](https://github.com/Bscanto/studies--trainings/tree/main/3-Application%20development/DevelopmenJavaScripe%26node.js/js-basics/operators)

**[⬆ voltar ao topo](#Índice)**

---

# Controle de fluxo

São comandos da linguagem que permitem desviar o fluxo do programa, dependendo de um teste.

> IF...Else :

Executa uma instrução se a condição específica é verdadeira. Se a condição é falsa, outra instrução pode ser executada

A sintaxe do if é a seguinte:

```javascript
if (<teste>) {
  <código a ser executado caso o teste seja verdadeiro>
}
```

Podemos, por exemplo, executar um trecho do código unicamente se uma variavel nossa for maior do que dez.

```javascript
let horas = 20;

if ( horas >= 6 && < 12);
    console.log('Bom Dia!'); // se a a hora estiver entre 6 - 12 o loop encerra aqui!

    else if ( horas >= 12 && < 18);
    console.log('Boa tarde!');// se a a hora estiver entre 12 - 18 o loop encerra aqui!

    else
    console.log('Boa noite!');// senao aqui!
```



>SWITCH...CASE

Retorna uma expressão, combinando o valor da expressão a condição do caso e executa a condição associada a esse caso.
O switch é uma estrutura para testes simples, muito usado quando temos que testar uma mesma condição diversas vezes, pois é mais legível do que uma cadeia de else if.

```javascript
var tipoUsuario = "Gerente";

switch (tipoUsuario) {
    case "Admin":
        mensagem = " Feliz Natal, chefe! ";
        break;
    case "Gerente":
        mensagem = "Boas festas, meu amigo!";
        break;
    default:
        mensagem = "Boas festas!";
}
    break;
}
```



## Laços de repetição (loops)

Se existe uma coisa que os computadores são muito bons é em executar algo várias vezes. Desde que saibamos o que queremos que o computador faça. Felizmente, para não precisamos repetir inúmeras vezes a invocação de uma função ou certo código, existe os loops (laços de repetição).

>FOR

Cria um loop que consiste em três opções de expressões, entre parenteses e separados por ponto e virgula, seguindo pela instrução executada no loop.

Formado por três partes: inicialização, condição e incremento. A sintaxe é:

```JavaScript
for (inicialização, condição e incremento);

for (var i = 0; i <= 10; i++) {
  //código a ser executado até a condição se tornar falsa
}
```

>FOR IN

Itera através de enumeráveis Propriedades de um objeto, em ordem arbitrária, para cada propriedade distinta uma instrução pode ser executada.

É utilizado quando não sabemos quantas vezes temos que interar sobre um array ou objeto.

```Javascript
const pessoa = {
    nome: 'Bruno',
    idade:30
};
for (let chave in pessoa)
    console.log(chave, pessoa [chave]);
    // saida: 
    nome Bruno
    idade 30

```
> FOR OF

Itera através de objetos iteráveis( incluindo Arrays, arrays-like, objetos) invocando uma interação personalizada com instruções para serem executadas pelo valor de cada propriedade.

```javascript
const cores = ['vermelho', 'verde', 'azul'];

for (  let cor of cores)
console.log(cor);

```


>FOREACH

permite executar uma função para cada item de um array.
Utilizamos o foreach quando queremos percorrer as propriedades de um objeto ou os itens de um array, sem precisamos nos preocupar em contar quantos são.

```javascript
var arr = [1,2,3];
arr.forEach(function(each){
  console.log(each);
});
```

>WHILE

Funciona basicamente igual ao for, e é possível sempre trocar o for() por um while(). Escolhemos um ou outro pela clareza do que estamos fazendo. Geralmente preferimos utilizar o loop for() para interar com contadores e loops while() até que alguma condição mude (de true para false, por exemplo).

```javascript
let i = 0;
    while (i <= 5){
        if (i % 2 !== 0);
        console.log(i);
        i++;
    }
```


>DO WHILE

Cria um loop que executa uma específica instrução até que a condição de teste seja falsa. A condição é retornada depois da execução da instrução especifica executando ao menos uma vez, independente da condição, pois primeiro ele faz do e depois testa a condição.

```javascript
let i = 0;
do{
    if (i % 2 !== 0);
    console.log(i);
    i++;
} while (i <= 5);
```

>BREAK

Termina o atual loop, troca ou nomeia a instrução e traansfere o controle do programa para o proxima instrução após a que foi terminada.

```javascript
let i = 0;
while (i <= 10)
    if(i === 5) break;
    console.log(i);
    i++;
```

>CONTINUE

Termina a execução das instruções na atual iteração do atual loop, econtinua a execução do loop com a seguinte iteração.

```javascript
let i = 0;
while (i <= 10)
    if(i % 2 === 0 );
    console.log(i);
    i++;
    continue;
    console.log(i);
    i++;
```


**[⬆ voltar ao topo](#Índice)**

---

# Objetos

Objetos em JS podem ser comparados com objetos na vida real, o conceito de objeto pode ser entendido como objeto tangiveis da vida real.
Em jacascript, um objeto é uma entidade independente como propriedade e tipo. Compare-a como uma xícara, por exemplo,  uma xícara é um objeto com propriedade, ela tem cor, uma forma, peso, uma material de composição, etc...
Da mesma forma objetos em JS podem ter Propriedades que definem suas caracteristicas.

```javascript
let itemName = 'Pen';
let itemPrice = 3;
let itemAvailable =true;
let iteColor ='red';

let pen = {
    itemName: 'Pen',
    itemPreice: 3,
    itemAvalable: true,
    itemColor:'red'
}
```

## Objetos
Um objeto é uma coleção de dados e/ou funcionalidades relacionada que geralmente consistem m diversas variáveis e funções que são chamadas e propriedades e métodos quando estão dentro de objetos.

[Trabalhando com objetos em JS (Saiba mais clique aqui)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)

[pasta Objetos](https://github.com/Bscanto/studies--trainings/tree/main/3-Application%20development/DevelopmenJavaScripe%26node.js/js-basics/objects)

## Construtores
O construtor é um método especial para criar e inicializar um objeto criado apartir de uma classe.

[Construtores (Saiba mais clique aqui)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor)
## Math
É um objeto integrado que possui propriedades e métodos para constantes e funções jmatemática, não é um objeto de função, ao contráriode muitos outros objetos globais. MATH não pe um construtor, todas as propriedades e métodos de math são estáticos, você se refere a constante PI como Math.PI e chama a função seno como Math.in(x), onde x é o argumento do método. As constantes são definidas como a precisão total  dos números reais em javascript.

[Math (Saiba mais clique aqui)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## Strings
O objeto String é o constructor para string, ou uma sequência de caracteres.

[Strings (Saiba mais clique aqui)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
 
## Date
 Cria uma instância JS de date que representa um unico momento do tempo. objeto Date são baseados no valor de tempo que é o número de milesegundos desde 1° de janeiro de 1970(UTC).

 [DATE (Saiba mais clique aqui)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)

**[⬆ voltar ao topo](#Índice)**

---

## Arrays

O JavaScript Array faz parte dos objetos globais da linguagem e é utilizado para armazenar uma coleção de elementos em uma única variável. Na prática, o array é uma estrutura de dados que contém um índice numérico e um elemento, que pode ser de qualquer tipo primitivo de dados, um objeto ou, até mesmo, um outro array.

Trata-se de um recurso muito utilizado na linguagem e, portanto, é importante que as pessoas que utilizam JavaScript entendam como ele funciona e de que forma pode ser usado em uma aplicação web. 


```javascript
let friends = ['Marcos', 'Silvia', 'Elisa']
friends[1] = 'luisa'

console.log(friends)
```
[Arrays (Saiba mais clique aqui)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
---


[pasta Matrizes](https://github.com/Bscanto/studies--trainings/tree/main/3-Application%20development/DevelopmenJavaScripe%26node.js/js-basics/arrays)

**[⬆ voltar ao topo](#Índice)**
## Funções
Algo bem comum das linguagens de programação é o uso de funções, cada linguagem tem suas particularidades e maneiras específicas de como definir as mesmas. Nesse post vamos entender as diferentes definições e tipos de funções em JavaScript.
O jeito mais básico de definir funções em JavaScript é através da function declaration, toda função de declaração começa com a palavra reservada e obrigatória function, seguida pelo nome da função (também obrigatório) e uma lista de parâmetros (opcionais) separados por vírgula e encapsulados em parenteses (obrigatórios), o último passo é definir as chaves (obrigatórias) que será o corpo da função.

A estrutura seria mais ou menos assim:

![](https://res.cloudinary.com/mahenrique94/image/upload/v1575548840/Untitled_Diagram_wfmnwk.png),

```javascript
function ola() {
    console.log('Olá')
}
ola()

function ola() {
    function mensagem() {
        return 'Olá'
    }
    console.log(mensagem())
}
ola()

function ola() {
    function mensagem() {
        return 'Olá'
    }
    console.log(mensagem())
}
ola()

console.log(mensagem()) // a função mensagem não irá existir nesse trecho de código, ela somente existe dentro da função ola

function ola(nome) {
    console.log('Olá', nome)
}
ola('Matheus')
```
[Pasta Funções](https://github.com/Bscanto/studies--trainings/tree/main/3-Application%20development/DevelopmenJavaScripe%26node.js/js-basics/functions)

[Função(Saiba mais clique aqui)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
---