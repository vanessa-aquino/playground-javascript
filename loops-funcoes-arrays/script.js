// Exercício 1 //
// Escreva uma função que consiga inserir novos elementos em uma lista. A lista pode armazenar no máximo 10 elementos. ⁠Elementos do tipo string com mais de 7 caracteres não são permitidos.
// Em caso de sucesso, retorne: "Elemento inserido com sucesso, a lista agora é: x" sendo x lista atualizada.
// Em caso de falha, retorne: "Não foi possível inserir este valor"

let list = [];

function insertNewElements(element) {

    for(let i = 0; i < 10; i++) {
        if(list.length >= 10 || element.length > 7) {
            return 'Não foi possível inserir este valor.'
        } else {
            list.push(element);
            return `Elemento inserido com sucesso, a lista agora é ${list}.`
        }
    }
}

console.log(insertNewElements('folha'));
console.log(insertNewElements('mola'));
console.log(insertNewElements('falha'));
console.log(insertNewElements('amor'));
console.log(insertNewElements('casa'));
console.log(insertNewElements('tarde'));
console.log(insertNewElements('boteco'));
console.log(insertNewElements('pão'));
console.log(insertNewElements('carne'));
console.log(insertNewElements('frango'));
console.log(insertNewElements('peixe'));
console.log(insertNewElements('moto'));
console.log(insertNewElements('abacate'));

// Exercício 2 //
// Escreva uma função que recebe uma lista a como parâmetro. A lista a deve ter exatamente 15 elementos inteiros. ⁠Crie também uma lista b de mesmo tipo, observando a seguinte lei de formação:
// "Todo elemento da matriz b deve ser o quadrado do elemento da matriz a correspondente".
// Retorne a lista b resultante.


let listOfIntegerElements = [5, 12, 19, 23, 34, 45, 56, 67, 78, 89, 91, 102, 113, 124, 135];


function createListOfSquaredNumbers (listOfIntegerElements) {
   let listOfSquaredElements = [];

   for(let i = 0; i < listOfIntegerElements.length; i++) {
    listOfSquaredElements.push(listOfIntegerElements[i] * listOfIntegerElements[i]);
   }
   return listOfSquaredElements;
}

console.log(createListOfSquaredNumbers(listOfIntegerElements));

