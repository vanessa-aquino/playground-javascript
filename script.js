console.log('teste');
// Exercício 1 //
// Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

// // let valor = parseFloat(prompt('Digite um número entre 0 e 10.'));

// while(valor >= 0 && valor <= 10) {
//    // alert(`O valor digitado foi: ${valor}`);
//     //valor = parseFloat(prompt(`Digite um número entre 0 e 10.`))
// }

// alert(`Saiu do laço de repetição`)

// Exercício 2 //
// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

// let nomeUsuario = prompt('Escolha seu nome de usuário.');
// let senha = prompt(('Defina a sua senha.'));

// while(nomeUsuario === senha) {
//     alert(`O nome de usuário não pode ser igual a senha.`);
//     senha = prompt(`Escolha uma senha diferente.`);
// }

// alert(`Usuário e senha cadastrados com sucesso.`)

// Exercício 3 //
// Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média.

// let numero = parseInt(prompt(`Digite um número.`));
// let soma = 0;
// let quantidade = 0;

// while(numero >= 0 && numero <= 10) {
//     soma+=numero;
//     quantidade++;
//     numero = parseInt(prompt(`Digite mais um número.`));
// }

// alert(`A soma é: ${soma} \ne a média é: ${parseInt(soma /quantidade)}`)

// Exercício 4 //
// Faça um programa que registre votos. Em uma eleição para o grêmio estudantil existem apenas 3 candidatos, o candidato a, o candidato b e o candidato c.
// Solicite ao usuário que entre com a letra correspondente a um candidato e incremente em +1 o número de votos para o candidato. ⁠Caso o usuário entre com um valor que não seja correspondente a um candidato, alerte: "Candidato não encontrado".
// Ao final de cada votação alerte a mensagem: "Voto registrado com sucesso".
// Para encerrar a votação é necessário que entre com uma flag (variável de controle) de parada: use o x para isso.
// Quando o valor x for inserido alerte o número de votos que cada candidato teve.

let candidato_A = 0;
let candidato_B = 0;
let candidato_C = 0;

let votacao = prompt(`Digite o seu voto (A, B ou C).`);

while (votacao != 'x') {
    if (votacao == 'A') {
        candidato_A++
        alert(`Voto registrado com sucesso.`);
    } else if (votacao == 'B') {
        candidato_B++
        alert(`Voto registrado com sucesso.`)
    } else if (votacao == 'C') {
        candidato_C++
        alert(`Voto registrado com sucesso.`)
    } else {
        alert(`Candidato não encontado.`)
    }

    votacao = prompt(`Digite o seu voto (A, B ou C).`)
}

alert(`O candidato A teve ${candidato_A} votos\no candidato B teve ${candidato_B} votos\ne o candidato C teve ${candidato_C} votos.`)