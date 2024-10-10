// Exercício 1 - Pessoa Premiada //
// Você está trabalhando na loteria federal e um cliente se aproxima e fala que foi premiado.
// Os dados do ganhador já estão no sistema e você agora só deve comparar se as informações prestadas pelo suposto ganhador são realmente verdadeiras. Pegue os documentos necessários e faça a consulta.

let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
  }

  function supposedWinner(name, cpf) {
    let firtLetter = name.charAt(0).toUpperCase();
    let remainingLetters = name.slice(1).toLowerCase();
    let newName = firtLetter + remainingLetters;

    if(newName === ganhador.nome && cpf === ganhador.cpf) {
        return 'É ganhador!'
    } 
        return 'Não é ganhador!'
  }

console.log(supposedWinner('adamastor', '123.321.789-98'))

// Exercício 2 - Quem veio atrás do prêmio? //
// O gerente da loteria, pediu para que você guarde as informações das pessoas que vieram atrás do prêmio.
// Antes você recebia o objeto e fazia a comparação. Agora você precisa armazená-lo em uma variável e inseri-lo em uma lista, mediante a uma condição.

let notWinner = {
    name: 'Larissa',
    birth: '31/05/1958',
    cpf: '111.222.333-44',
    maritalStatus: 'Casada',
};

let notWinner2 = {
    name: 'Paula',
    birth: '02/08/1998',
    cpf: '089.342.789-54',
    maritalStatus: 'Solteira',
};

let notWinner3 = {
    name: 'Laura',
    birth: '18/09/1999',
    cpf: '334.997.777-00',
    maritalStatus: 'Solteira',
};


let listOfPeoplesNotWinners = [];

function peoplesNotWinners (people) {

    if(supposedWinner(people.name, people.cpf) === 'Não é ganhador!') {
        listOfPeoplesNotWinners.push(people);
    }

    return `Vieram reclamar o prêmio ${listOfPeoplesNotWinners.length} pessoa(as)`;
}

console.log(peoplesNotWinners(notWinner));
console.log(peoplesNotWinners(notWinner2));
console.log(peoplesNotWinners(notWinner3));

