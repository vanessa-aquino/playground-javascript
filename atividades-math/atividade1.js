// Exercício 1 //
console.log('Exercício 1');
// Escreva uma função chamada renderUpToTwenty. Quando a função for chamada, os números de 0 a 20 devem ser impressos no console.

function renderUpToTwenty() {
  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
}
renderUpToTwenty();

// Exercício 2 //
console.log('Exercício 2');
// Escreva uma função chamada tenInTenToAHundred(). Quando a função for chamada, os números de 10 a 100, contando de 10 em 10, devem ser impressos no console.

function tenInTenAHundred() {
  for (let i = 10; i <= 100; i += 10) {
    console.log(i);
  }
}
tenInTenAHundred();

// Exercício 3 //
console.log('Exercício 3');
// Escreva uma função chamada oddUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem ímpares.

function oddUpToTwenty() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

oddUpToTwenty();

// Exercício 4 //
console.log('Exercício 4');
// Escreva uma função chamada evenUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem pares.

function evenUpToTwenty() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

evenUpToTwenty();

// Exercíio 5 //
console.log('Exercício 5');
// Escreva uma função chamada fromNegativeToPositive(). Quando a função for chamada, apresente os valores de -10 a 0.

function fromNegativeToPositive() {
  for (let i = -10; i <= 0; i++) {
    console.log(i);
  }
}

fromNegativeToPositive();

// Exercício 6 //
console.log('Exercício 6');
// Escreva uma função chamada inDescendingDirection. Quando a função for chamada, apresente valores de 10 a 0 no console.

function inDescendingDirection() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}

inDescendingDirection();

// Exercício 7 //
console.log('Exercício 7');
// Escreva uma função chamada toSquare(). Quando a função for chamada, apresente o quadrado dos valores da sequência de 1 a 10.

function toSquare() {
  for ( let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
}

toSquare();
