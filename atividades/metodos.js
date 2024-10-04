console.log('teste');

// Exercício 1 //
// Crie uma função que recebe três parâmetros: uma frase, uma palavra antiga e uma palavra nova. A função deve buscar por todas as ocorrências da palavra antiga na frase e substituí-las pela palavra nova. Então, a função deve retornar a nova frase com o resultado da substituição.

function substituirPalavras(frase, palavraAntiga, palavraNova) {
  const novaFrase = frase.replaceAll(palavraAntiga, palavraNova);

  return novaFrase;
}

console.log(
  substituirPalavras(
    'A minha casa é longe da casa do meu amigo',
    'casa',
    'residência'
  )
);

// Exercício 2 //
// Escreva uma função em JavaScript que recebe três parâmetros numéricos: nota1, nota2 e nota3, que representam as notas de um aluno em três avaliações. A função deve calcular a média aritmética das notas e arredondar o resultado para uma casa decimal.
//A função deve retornar a média arredondada em uma mensagem no seguinte formato: "A média do aluno é <media>."
function notaDasAvaliacoes(nota1, nota2, nota3) {
  const mediaDasNotas = ((nota1 + nota2 + nota3) / 3).toFixed();

  return `A média do aluno é ${mediaDasNotas}`;
}
console.log(notaDasAvaliacoes(10, 8.5, 9));

// Exercício 3 //
// Escreva uma função em JavaScript que recebe dois parâmetros numéricos: valorUnitario e quantidade, que representam o valor unitário de um produto e a quantidade comprada, respectivamente. A função deve calcular o valor total da compra, aplicando um desconto progressivo no valor unitário e formatando o resultado com duas casas decimais.
// Em seguida, a função deve substituir o ponto por vírgula na string do valor total, e deve retornar uma mensagem no seguinte formato: "O valor total da compra é R$ <valorTotal>."

function valorProduto(valorUnitario, quantidade) {
  let valorTotal = 0;

  if (quantidade >= 5) {
    valorTotal = quantidade * valorUnitario * 0.9;
  } else if (quantidade >= 10) {
    valorTotal = quantidade * valorUnitario * 0.8;
  } else {
    valorTotal = quantidade * valorUnitario;
  }

  return valorTotal.toFixed(2);
}
console.log(valorProduto(20, 5));
