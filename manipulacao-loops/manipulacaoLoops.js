// Exercício 1 //
console.log('Exercício 1');
// Desenvolva uma função chamada verticalText, que receberá uma string como parâmetro. A função deverá imprimir a palavra de forma vertical usando o console.log.

function verticalText(text) {
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
}

console.log(verticalText('palavra'));

// Exercício 2 //
console.log('Exercício 2');
// Desenvolva uma função chamada incrementText, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando, começando somente pela primeira letra, depois a primeira e a segunda e assim sucessivamente conforme exemplo.

function incrementText(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[i];
    console.log(result);
  }
}

incrementText('Vanessa');

// Exercício 3 //
console.log('Exercício 3');
// Desenvolva uma função chamada incrementTextBackwards, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando ao contrário, começando somente pela última letra, depois a última e a penúltimo e assim sucessivamente conforme exemplo.

function incrementTextBackward(str) {
  let result = '';
  let initialIndice = str.length - 1;

  for (let i = initialIndice; i >= 0; i--) {
    result = str[i] + result;
    console.log(result);
  }
}

incrementTextBackward('palavra');

// Exercício 4 //
console.log('Exercício 4');
// ​Desenvolva uma função chamada padEnd, que receberá três parâmetros: uma palavra (string), a quantidade de repetição do caractere (number) e o caractere de repetição (string).
// Sua função deverá retornar a string preenchida com o caractere de acordo com o comprimento passado por parâmetro.

function padEnd(word, number, str) {
  let result = word;

  for (let i = 0; i < number; i++) {
    result += str;
  }
  return result;
}

console.log(padEnd('teste', 3, '*'));

// Exercício 5 //
console.log('Exercício 5');
// Desenvolva uma função chamada subString, que receberá três parâmetros: uma palavra (string), a posição inicial (number) e a posição final (number). Sua função deverá retornar a parte da string **entre** o início e o fim dos índices passados por parâmetro (não incluindo os caracteres dos próprios índices).

function subString(str, initial, end) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (i > initial && i < end) {
      result += str[i];
    }
  }

  return result;
}

console.log(subString('Dinossauro', 3, 8));

// Exercício 6 //
console.log('Exercício 6');
// Desenvolva uma função chamada stringRepeater, que receberá dois parâmetros: uma palavra ou frase (string) e a quantidade de repetição (number). Sua função deverá retornar uma nova string que contem o número especificado de cópias concatenadas da palavra passada por parâmetro.

function stringRepeater(frase, repeticao) {
  let result = '';

  for (let i = 0; i < repeticao; i++) {
    result += frase;
  }

  return result;
}

console.log(stringRepeater('Tem uma borbole ali. ', 2));

// Exercício 7 //
console.log('Exercício 7');
// Desenvolva uma função chamada stringCentralizer, que receberá três parâmetros:​ uma palavra (string), a quantidade de repetição do elemento (number) e o elemento de repetição (string).
// Sua função deverá retornar uma nova string que contem a palavra passada por parâmetro centralizada entre os elementos de repetição com um espaço em branco nas laterais e a quantidade exata passada por parâmetro.

function stringCentralizer(palavra, numRept, elementRept) {

  let result = ` ${palavra} `;

  for(let i = 0; i < numRept; i++) {
    result = elementRept + result + elementRept;
  }

  return result;

}

console.log(stringCentralizer('verdura', 3, '¨!'));

