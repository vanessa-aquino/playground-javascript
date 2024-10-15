console.log('Manipulando Objetos');

// Exercício 1 - Verificando Aprovações //
// Dada a seguinte lista de alunos:
// Determine em quantas matérias o aluno foi aprovado. Se o aluno obteve nota maior ou igual a 6, está aprovado.

let listaAlunos = [
  {
    nome: 'João',
    curso: 'Ciencia da Computação',
    turno: 'Noturno',
    mediaCorte: 7,
    materias: [
      {
        nome: 'Calculo I',
        avaliacoes: [6, 8, 10, 8]
      },
      {
        nome: 'Pensamento Computacional',
        avaliacoes: [6, 8, 6, 8]
      },
      {
        nome: 'Linguagem Orientada a Objetos',
        avaliacoes: [7, 8, 9, 10]
      },
      {
        nome: 'Arquitetura de Organização de Computadores',
        avaliacoes: [6, 8, 7, 8]
      }
    ]
  }
]

let approvedMaterials = 0;
let listOfMaterials = listaAlunos[0].materias;

for(let i = 0; i < listOfMaterials.length; i++) {
  let totalGrade = 0;
  for(let j = 0; j < listOfMaterials[i].avaliacoes.length; j++) {
    totalGrade += listOfMaterials[i].avaliacoes[j];
  }

  if(totalGrade / listOfMaterials[i].avaliacoes.length >= 6) {
    approvedMaterials++
  }
}

console.log(`O aluno está aprovado em ${approvedMaterials} matérias.`);

// Exercício 2 - Verificando aprovações no semestre //
// Sua tarefa é verificar se o aluno foi aprovado no semestre atual e poderá prosseguir para o próximo. Crie uma função chamada calculaMedia para saber média total do aluno, a partir das notas que ele obteve nas avaliações do semestre.

function calculaMedia() {
  let listOfMaterials = listaAlunos[0].materias;
  let averageSum = 0;

  for(let i = 0; i < listOfMaterials.length; i++) {
    let totalGrade = 0;
    for(let j = 0; j < listOfMaterials[i].avaliacoes.length; j++) {
      totalGrade += listOfMaterials[i].avaliacoes[j];
    }

    averageSum += totalGrade / listOfMaterials[i].avaliacoes.length;
  }

  return averageSum / listOfMaterials.length;
}

function approvedOrNot() {
  if(calculaMedia < 7) {
    return 'O aluno não foi aprovado no semestre';
  }
  return 'Aluno aprovado';
}

console.log(calculaMedia().toFixed(2));
console.log(approvedOrNot());

// Exercício 3 - Verificando destino de passageiros //
// Dado o seguinte objeto onibus:
// Sua tarefa é determinar quais passageiros irão descer do ônibus em determinada parada.
// Desenvolva um método que recebe a parada atual como parâmetro e verifica se é igual ao valor de paradas do objeto onibus. Esse método deverá verificar em quais passageiros o destino é igual à parada atual do ônibus.
// Em seguida, deve retornar um array com todos os passageiros que irão descer na parada atual.


const onibus = {
  capacidade: 40,
  origem: 'Curitiba-PR',
  destino: 'Rio de Janeiro-RJ',
  paradas: [
    'São Paulo-SP',
    'Campinas-SP',
    'São José dos Campos-SP',
    'Volta Redonda-RJ'
  ],
  passageiros: [
    {
      nome: 'Luis da Silva',
      rg: '1234567890',
      bilhete: {
        origem: 'Curitiba-PR',
        destino: 'São José dos Campos-SP',
        poltrona: 15,
      }
    },
    {
      nome: 'João da Silva',
      rg: '1234567891',
      bilhete: {
        origem: 'São Paulo-SP',
        destino: 'Rio de Janeiro-RJ',
        poltrona: 16,
      }
    }
  ],

  descida: function(paradaAtual) {
    const passageirosDescendo = [];

    for(let i = 0; i < onibus.passageiros.length; i++) {
      const passageiro = onibus.passageiros[i];

      if(passageiro.bilhete.destino === paradaAtual) {
        passageirosDescendo.push(passageiro);
      }
    }

    return passageirosDescendo;
  }
}

onibus.descida();

console.log(onibus.descida('Rio de Janeiro-RJ'));
