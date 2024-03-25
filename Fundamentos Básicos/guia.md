**Guia de Fundamentos Básicos de JavaScript**
- Para armazenar dado podemos declarar variáveis,
```javascript
    var idade = 25;
    let nome = "João";
    const PI = 3.14; 
```
**Tipos de Dados**
- Js possui vários tipos de dados, incluindo números, strings, booleanos, arrays, objetos etc.
```javascript
    let numero = 10; // Número
    let texto = "Hello!"; // String
    let isDay = true; // Boolean
    let sorteio = [1, 2, 3, 4, 5] // Array
    let usuario = { nome: "Kevin", idade: 23 }; // Objeto
```
**Operadores**
- Js suporta diversos operadores para realizar operações em variáveis e valores.
```javascript
    let x = 10;
    let y = 5;
    let soma = x + y; // Operador de adição
    let subtracao = x - y; // Operador de subtração
    let multiplicacao = x * y; // Operador de multiplicação
    let divisao = x / y; // Operador de divisão
    let restoDivisao = x % y; // Operador de resto da divisão
    let incremento = x++; // Operador de incremento
    let decremento = y--; // Operador de decremento
```
**Estrutura de Controle de Fluxo**
- As estruturas de controle de fluxo permitem controlar o fluxo de execução do código JavaScript.
```javascript
    // Condicional If-Else
    let idade = 18;

    if (idade >= 18) {
            console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }

```
```javascript
    // Loop WHILE
    let contador = 0;
    while (contador < 5) {
        console.log("Contagem: " + contador);
        contador++;
    }

    // Loop FOR
    for (let i = 0; i < 5; i++) {
        console.log("Contagem: " + i);
    }

```
**Funções**
- As funções permitem agrupar um bloco de código e reutilizá-los sempre que necessário.
```javascript
    // Declaração de uma função
    function saudacao(nome) {
        return "Olá, " + nome + "!";
    }

    // Chamada da função
    let mensagem = saudacao("João");
    console.log(mensagem); // Saída: Olá, João!
```


**Links de Referência**\
[Conceito de JavaScript - Hoisting, Closure, Data types, Asynchronous etc](https://www.tabnews.com.br/ghostnetrn/perguntas-sobre-javascript-frequentemente-feitas-por-entrevistadores)\
[Conceito de JavaScript - Hoisting, Closure, Data types, Asynchronous etc](https://www.tabnews.com.br/ghostnetrn/perguntas-sobre-javascript-frequentemente-feitas-por-entrevistadores)