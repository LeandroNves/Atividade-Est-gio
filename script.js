//Exercício 1 
let indice = 13;
let soma = 0;
let acum = 0;

while (acum < indice) {
    acum = acum + 1;
    soma = soma + acum;
} 

console.log(soma); //Resulrado é 91

//Exercício 2 
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
let numero = 34; //Número que irei verificar 
isFibonacci(numero);
let sequencia = calcularSequenciaFibonacci(numero);
console.log("A sequência de Fibonacci até " + numero + " é: " + sequencia.join(","));

//Exercício 5 
function inverterString(str) {
  let invertedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertedString += str[i];
  }
  return invertedString;
}

let minhaString = "Olá a todos, quero dizer que me sinto muito bem vindo a empresa Target Sistemas"; //String que irei inverter 
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida); 