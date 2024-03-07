README - Exercícios JavaScript
Este repositório contém códigos JavaScript para três exercícios diferentes. Cada exercício é descrito abaixo, junto com o código correspondente.

Exercício 1: Soma de Números
Neste exercício, é calculada a soma dos números de 1 até um determinado índice.

javascript
Copy code
let indice = 13;
let soma = 0;
let acum = 0;

while (acum < indice) {
    acum = acum + 1;
    soma = soma + acum;
} 

console.log(soma); // Resultado é 91
Exercício 2: Sequência de Fibonacci
Este exercício envolve a verificação se um número pertence à sequência de Fibonacci e a geração da sequência até esse número.

javascript
Copy code
function isFibonacci(num) {
  let a = 0;
  let b = 1;

  while (a <= num) {
      if (a === num) {
          console.log(num + " pertence à sequência de Fibonacci.");
          return;
      }
      let temp = a;
      a = b;
      b = temp + b;
  }

  console.log(num + " não pertence à sequência de Fibonacci.");
}

function calcularSequenciaFibonacci(num) {
  let a = 0;
  let b = 1;
  let sequencia = [a, b];

  while (a + b <= num) {
      let temp = a;
      a = b;
      b = temp + b;
      sequencia.push(b);
  }

  return sequencia;
}

let numero = 34; // Número que iremos verificar 
isFibonacci(numero);
let sequencia = calcularSequenciaFibonacci(numero);
console.log("A sequência de Fibonacci até " + numero + " é: " + sequencia.join(","));
Exercício 3: Inversão de String
Este exercício envolve a inversão de uma string dada.

javascript
Copy code
function inverterString(str) {
  let invertedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertedString += str[i];
  }
  return invertedString;
}

let minhaString = "Olá a todos, quero dizer que me sinto muito bem vindo a empresa Target Sistemas"; // String que iremos inverter 
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida);
Cada exercício é acompanhado de uma descrição e seu respectivo código. Para executar os códigos, basta copiar e colar em um ambiente JavaScript, como um navegador ou um ambiente Node.js.




