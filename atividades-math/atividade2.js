// Exercício 1 //
console.log('Exercício 1');
// Escreva uma função que apresente como resultado os quadrados dos números inteiros existentes na faixa de valores de 15 a 200.

function quadradoDosNumerosInteiros() {
  for (let i = 15; i <= 200; i++) {
    if (Number.isInteger(i)) {
      console.log(i * i);
    }
  }
}
quadradoDosNumerosInteiros();

// Exercício 2 //
console.log('Exercpicio 2');
// Escreva uma função que apresente a soma dos cem primeiros números naturais. (1+2+3+...+98+99+100).

function somaDosCemPrimeirosNumerosNaturais() {
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma = soma + i;
  }
  return soma;
}

console.log(somaDosCemPrimeirosNumerosNaturais());

// Exercício 3 //
console.log('Exercício 3');
// Escreva uma função que apresente todos os valores numéricos menores que 200 que são divisíveis por 4.

function menorQueDuzentosDivisivelPorQuatro() {
  for (let i = 0; i <= 200; i++) {
    if (i % 4 === 0) {
      console.log(i);
    }
  }
}

menorQueDuzentosDivisivelPorQuatro();

// Exercício 4 //
console.log('Exercício 4');
//  Escreva uma função que calcule o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 até 70.

function somaEMedia() {
  let soma = 0;
  let qntdPares = 0;
  for (let i = 50; i <= 70; i++) {
    if (i % 2 == 0) {
      soma = soma + i;
      qntdPares++;
    }
  }
    const media = soma / qntdPares;
    
    return media;
}

console.log(somaEMedia())
