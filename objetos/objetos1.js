console.log('Atividades');

// 1ª Parte: Modelagem

let pessoa = {
  nome: 'Vanessa',
  anoDeNascimento: 2000,
  cpf: '111.111.111-11',
  estado: 'Rio de Janeiro',
  logradouro: 'Rua 123',
};

let escola = {
  nome: 'Inovação',
  cnpj: '11.111.111/1111-11',
  areaDeAtuacao: 'Ensino Infantil',
  cidade: 'Nova Iguaçu',
  Estado: 'Rio de Janeiro',
  Logradouro: 'Rua 456',
  Curso: 'Alfabetização',
};

let curso = {
  nome: 'Engenharia de Software',
  duracaoEmAnos: 4,
  turma: '2025-1',
  modulos: 8,
};

let endereco = {
  cidade: 'Rio das Ostras',
  estado: 'Rio de Janeiro',
  logradouro: 'Rua 789',
  cep: '11.111-11',
};

// 2ª Parte: Manipulação - Estacionamento
// Dado o objeto carro que representa um carro estacionado, realize as seguintes tarefas:

const carro = {  
    placa: "ABC123",   
    classes: ["sedan"],  
    luxo: true,
    potencia: 200, 
    estacionado: true 
  }

function obterPlaca(){
    return carro.placa;
}

const resultado1 = obterPlaca();
console.log(resultado1);

function verificarClasses(){
    if (carro.classes.length === 1){
        return carro.classes[0];
    } else {
        return carro.classes;
    }
}

const resultado2 =  verificarClasses();
console.log(resultado2);

function potenciaReal(){
    // Verifica se o carro é de luxo
    if (carro.luxo){
        // Calcula o quadrado da potência atual do carro
        carro.potencia = carro.potencia * carro.potencia;
    } 

    // Retorna a potência do carro
    return carro.potencia;
}

const resultado3 =  potenciaReal();
console.log(resultado3);

function adicionarNovaClasse(novaClasse){
    // Array de classes permitidas
    const classesPermitidas = ["sedan", "hatchback", "suv", "crossover", "cupê"];

    // Verifica se o carro já possui 3 classes
    if (carro.classes.length >= 3) {
        return "Este carro não pode ter mais classes.";
    }

    // Verifica se a nova classe está entre as permitidas, 
    if (classesPermitidas.includes(novaClasse.toLowerCase())) {
        // Verifica se o carro já possui a nova classe
        if (carro.classes.includes(novaClasse)) {
            return `O carro já possui a classe ${novaClasse}.`;
        }

        // Adiciona a nova classe ao array de classes do carro
        carro.classes.push(novaClasse.toLowerCase());
        return `Classe ${novaClasse} adicionada com sucesso.`;
    }

    // Caso a nova classe não seja permitida
    return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê";
}

const resultado4 = adicionarNovaClasse('cupê');
console.log(resultado4);

function naoMaisLuxo(){
    if (!carro.estacionado){
        return `O carro ${carro.placa} não está estacionado.`;
    }else if(!carro.luxo){
        return `O carro ${carro.placa} não é luxuoso.`;
    }
    carro.luxo = false;
    return `O carro ${carro.placa} não é mais considerado um carro de luxo.`;
}

const resultado5 = naoMaisLuxo();
console.log(resultado5);