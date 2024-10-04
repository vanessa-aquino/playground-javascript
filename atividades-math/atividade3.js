// ATIVIDADE 3 //
console.log('ATIVIDADE 3')

// Exercício 1 //
console.log('Exercício 1')
// Escrever uma função chamada fibonacciNumbers(). A função quando chamada deve apresentar os valores da sequência numérica de Fibonacci até o décimo quinto termo. 

function fibonacciNumbers() {
  let atual = 1;
  let anterior = 0;
  let proximo;

  let listaFibonacci = []

  for (let i = 1; i <= 15; i++) {
    listaFibonacci.push(anterior);

    proximo = atual + anterior;
    atual = proximo;
    anterior = atual;
  }
  return listaFibonacci;
}
console.log(fibonacciNumbers())

// Exercício 2 //
console.log('Exercício 2')
// Escrever um programa que calcule e apresente o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra: Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro colocam-se dois grãos (neste momento, tem-se três grãos), no terceiro quadro colocam-se quatro grãos (tendo neste momento sete grãos), no quarto quadro colocam-se oito grãos (tendo-se então 15 grãos) até o limite de casas que é 64. A quantidade de grãos adicionados é sempre o dobro da quantidade anterior.

function graosNoTabuleiroDeXadrez() {
  soma = 0;
  graos = 1;

  for (let i = 1; i <= 64; i++) {
    soma = soma + graos;
    graos = graos * 2;
  }

  return graos;
}

console.log(graosNoTabuleiroDeXadrez())