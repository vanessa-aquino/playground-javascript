console.log('Array');

// Exercício 1 //
console.log('Exercício 1');
// Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres. Insira o valor recebido em um array e retorne o array gerado.

function addStringToArray(str) {
  let arr = [];

  if (str.length >= 5) {
    arr.push(str);
  }

  return arr;
}

console.log(addStringToArray('Texto'));

// Exercício 2 //
console.log('Exercício 2');
// Escreva uma função que recebe um valor do tipo number. Use o valor recebido para acessar uma posição do seguinte array: let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠. Caso a posição exista, retorne o nome que se encontra nela. ⁠Caso não seja acessado nenhuma posição com o valor recebido, ⁠alerte: "Valor não encontrado".

function addNumber(number) {
  let arr = ['Hermanoteu', 'Olonéia', 'Migalatéia', 'Godart'];

  if (number >= 0 && number < arr.length) {
    return arr[number];
  } else {
    alert('Valor não encontrado');
  }
}

console.log(addNumber(3));

// Exercício 3 //
console.log('Exercício 3');
// Crie um array de números, contendo os valores de 1 a 10. Crie uma função que recebe um número inteiro. Acesse a posição do array de números usando o valor recebido. Teste se o valor contido na posição é par ou ímpar.
// Caso seja par retorne: "O valor encontrado nesta posição é par", Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar".

function verifyParImpar(num) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (arr[num] % 2 === 0) {
    return 'O valor encontrado nesta posição é par.';
  } else {
    return 'O valor encontrado nesta posição é ímpar.';
  }
}

console.log(verifyParImpar(1));

// Exercício 4 //
console.log('Execício 4');
// Dado o array de nomes: let nomes = ["Pedro", "Rafael", "José"]⁠
// Crie uma função que recebe a lista de nomes como parâmetro. A função deve verificar qual dos nomes da lista tem a maior quantidade de caracteres e retornar o nome. Teste cada posição usando estrutura de repetição, a menos que a lista tenha apenas um valor inserido. Use este formato: "O nome x é o maior da lista"

let nomes = ['Pedro', 'Rafael', 'José'];

function findLongestName(names) {
  if (names.length === 1) {
    return names[0];
  }

  let longestName = names[0];

  for (let i = 1; i < names.length; i++) {
    if (names[i].length > longestName.length) {
      longestName = names[i];
    }
  }
  return `O nome ${longestName} é o maior da lista.`;
}

console.log(findLongestName(nomes));

// Exercício 5 //
console.log('Exercício 5');
// Dado o array de números como exemplo: numeros = [1,4,6,9,11,8]
// Escreva uma função que recebe a lista de números como parâmetro. A função deve realizar a soma dos valores das duas últimas posições da lista e armazenar o valor da soma em uma variável.// Use a variável para testar se o valor da soma é um múltiplo de 2.
// Se sim, retorne: "A soma é um múltiplo de 2". Caso contrário: "A soma não é um múltiplo de 2"

let numeros = [1, 4, 6, 9, 11, 8];

function sumMultipleogTwo(numbers) {
  let lastNumber = numbers[numbers.length - 1];
  let secondToLastNumber = numbers[numbers.length - 2];

  let sum = lastNumber + secondToLastNumber;

  if (sum % 2 === 0) {
    return 'A soma é um múltiplo de 2';
  } else {
    return 'A soma não é um múltiplo de 2;';
  }
}

console.log(sumMultipleogTwo(numeros));

// Exercício 6 //
console.log('Exercício 6');
// Dado o array de nomes como exemplo: let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]⁠
// Escreva uma função que recebe como parâmetros a lista de nomes, um nome (string) e um valor inteiro (number) para representar a posição.
// Acesse a lista na posição que corresponde ao valor inteiro recebido e armazene o valor contido na posição em uma variável.
// Teste se o nome recebido pela função como parâmetro é o mesmo que o armazenado na variável. Lembre-se de normalizar os dados antes de testar.
// Caso os valores sejam iguais, retorne: "Acertei". Caso não sejam, retorne: "Não é quem eu pensava"

let listNames = [
  'Pedro',
  'Rafael',
  'José',
  'Carla',
  'Maria',
  'Josef',
  'Raquel',
];

function verifyNamesPosition(names, name, position) {
  let receivedNname = name.toLowerCase();
  let nameOnTheList = names[position].toLowerCase();

  if (receivedNname === nameOnTheList) {
    return 'Acertei';
  } else {
    return 'Não é quem eu pensava';
  }
}

console.log(verifyNamesPosition(listNames, 'Rafael', 1));

// Exercício 7 //
console.log('Exercício 7')
// Dado dois arrays numéricos como exemplo. let numeros = [1,2,3,4,5,6,10,7] let outrosNumeros = [5,7,9,4,2,3,9]
// Escreva uma função que recebe as duas listas de números como parâmetro. A função deve conseguir identificar qual dos dois arrays é o maior.
// Após identificar o maior array, retorne o último elemento do array.
// Use este formato: "A maior lista é a lista cujo último número é: x"

let numeross = [1,2,3,4,5,6,10,7];
let outrosNumeros = [5,7,9,4,2,3,9,];

function identifyLargArr (list1, list2) {

  let lastNumberArrayOne = list1[list1.length -1];
  let lastNumberArrayTwo = list2[list2.length -1];

  if (list1.length > list2.length) {
    return `A maior lista é a lista cujo último número é: ${lastNumberArrayOne}`

 } else {
  return `A maior lista é a lista cujo último número é: ${lastNumberArrayTwo}`
 }

}

console.log(identifyLargArr(numeross, outrosNumeros))
