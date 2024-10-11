// Lista de Exercícios //
// Exercício 1 //
// Escreva uma função que receba uma lista a de dimensão 30 composta apenas por números inteiros. A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.


const listOf30Elements = [
    5, 12, 19, 26, 33, 40, 47, 54, 61, 68, 75, 82, 89, 96, 103, 110, 117, 124, 131, 138, 145, 152, 159, 166, 173, 180, 187, 194, 201, 208
];

function checkIfItIsEvenOrOdd(list) {
    let listOfPairs = 0;
    let oddList = 0;

    for(let i = 0; i < list.length; i++) {
        if(list[i] % 2 === 0) {
           listOfPairs++
        } else {
            oddList++
        }
    }

    return `A lista recebida possui ${listOfPairs} elementos pares e ${oddList} elementos ímpares.`;
}

console.log(checkIfItIsEvenOrOdd(listOf30Elements));

// Exercício 2 //
// Escreva uma função que recebe uma lista b de tamanho 10, composta por números inteiros.⁠
// Retorne o total de elementos ímpares existentes na matriz e também o percentual do valor total de números ímpares em relação à quantidade total de elementos armazenados na matriz.

const listOf10Elements = [
    3, 8, 15, 22, 29, 34, 41, 48, 55, 62
];

function totalOfOddElements(list) {
    let listOfOddElements = 0;

    for(let i = 0; i < list.length; i++) {
        if(list[i] % 2 != 0) {
            listOfOddElements++
        }
    }

    let oddPercentage = (listOfOddElements / list.length) * 100;

    return `O total de valores ímpares é ${listOfOddElements} e corresponde a ${oddPercentage}% da lista.`

}


console.log(totalOfOddElements(listOf10Elements));

// Exercício 3 //
// Escreva uma função que receba como parâmetro duas listas a e b, cada uma com dez elementos. ⁠A função deve realizar a validação do tamanho da lista. Caso sejam maiores ou menores que 10, retorne: "Lista fora dos padrões necessários".
// A lista a deve ser composta por valores divisíveis por 2 e 3, enquanto a lista b deve ser composta apenar por valores múltiplos de 5. ⁠A composição das listas deve ser validada pela função. Caso a composição não esteja correta, retorne: "Valores não permitidos encontrados".

const list1 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const list2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function listSizeValidation(listOne, listTwo) {
   if(listOne.length != 10 || listTwo.length != 10) {
    return 'Lista fora dos padrões necessários.';
   }

   for(let i = 0; i < listOne.length; i++) {
    if((listOne[i] % 2 !== 0 && listOne[i] % 3 !== 0)) {
        return 'Valores não permitidos encontrados';
    }

    for(let j = 0; j < listTwo.length; j++) {
        if((listTwo[i] % 5 !== 0)) {
            return 'Valores não permitidos encontrados';
        }
    }

}

return 'Lista válida.'
}

console.log(listSizeValidation(list1, list2));

