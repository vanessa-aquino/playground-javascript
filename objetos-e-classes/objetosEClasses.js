// Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
// Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.


class Car {
    mark;
    color;
    fuelPerKilometer;
  
    constructor(mark, color, fuelPerKilometer) {
      this.mark = mark;
      this.color = color;
      this.fuelPerKilometer = fuelPerKilometer;
    }
  
    amountSpentForJourney(distanceOfTheRoute, fuelPrice) {
      let price = distanceOfTheRoute * this.fuelPerKilometer * fuelPrice;
      return `O valor gasto para realizar este percurso é de R$${price}`;
    }
  }
  
  const fiat = new Car('CarroX', 'Azul', 1/12);
  const ferari = new Car('CarroB', 'Vermelho', 2/12);
  const jaguar = new Car('Carroy', 'Preto', 3/12)
  
  console.log(fiat);
  console.log(ferari);
  console.log(jaguar);
  
  console.log(jaguar.amountSpentForJourney(100, 4.50));
  
  
// Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer seu IMC;

class Pessoa {
    name;
    weight;
    height;

    constructor (name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateIMC() {
        let calculation = this.weight / (this.height * this.height);
        return calculation;
    }

}

const jose = new Pessoa('José', 70, 1.75);
const vanessa = new Pessoa('Vanessa', 50, 1.67);

console.log(jose.calculateIMC().toFixed(2));
console.log(vanessa.calculateIMC().toFixed(2));

  