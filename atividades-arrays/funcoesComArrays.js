console.log('EXERCÍCIOS');

const listaDeElementos = [1, 5, 7, 9, 3, '10', '11', '15'];

// Exercício 1 //
console.log('Exercício 1');
// Escreva uma função chamada retornaTodosElementos que não recebe nenhum parâmetro. Sempre que chamada, a função deverá alertar a lista listaDeElementos em tela.

function retornaTodosElementos() {
  return listaDeElementos;
}

console.log(retornaTodosElementos());

// Exercício 2 //
console.log('Exercício 2');
// Escreva uma função chamada retornaValorEpecifico. A função deve receber um valor inteiro como parâmetro. Use o valor recebido para acessar a posição na lista e retorne o valor contido na posição.
// Desta forma: "O valor contido nesta posição é: x".

function retornaValorEspecifico(valor) {
  const valorRecebido = listaDeElementos[valor];

  if (valor >= 0 || valor <= listaDeElementos.length()) {
    return `O valor contido nessa posição é ${valorRecebido}`;
  }
}

console.log(retornaValorEspecifico(4));

// Exercício 3 //
console.log('Exercício 3');
// Escreva uma função chamada retornarTipoElemento. A função deve receber um valor inteiro como parâmetro.
// Use o valor recebido para acessar a posição na lista. Alerte qual o tipo do elemento contido na posição (use o typeof para isso).
// Se for do tipo texto alerte: "O elemento x é um elemento do tipo texto", Se for número alerte: "O elemento x é um elemento do tipo número"

function retornarTipoELemento(valorInteiro) {
  const valorInteiroRecebido = listaDeElementos[valorInteiro];
  typeof valorInteiroRecebido;

  if (typeof valorInteiroRecebido == 'string') {
    alert(`O elemento ${valorInteiroRecebido} é um elemento do tipo texto.`);
  } else if (typeof valorInteiroRecebido == 'number') {
    alert(`O elemento ${valorInteiroRecebido} é um elemento do tipo número.`);
  }

  return typeof valorInteiroRecebido;
}

console.log(retornarTipoELemento());

// Exercício 4 //
console.log('Exercício 4');
// Escreva uma função removeUltimoElementoString. A função não recebe parâmetros. Quando chamada, a função deverá remover o último elemento da lista, mas somente se for uma string.
// Caso a remoção seja realizada, retorne: "Elemento deletado com sucesso". Caso contrário: "Falha ao remover o elemento da lista".

function removeUltimoElementoString() {
  if (typeof listaDeElementos[listaDeElementos.length - 1] == 'string') {
    listaDeElementos.pop();
    return 'Elemento deletado com sucesso.';
  } else {
  }
  return 'Falha ao remover o elemento da lista.';
}

console.log(removeUltimoElementoString());

// Exercício 5 //
console.log('Exercício 5');
// Escreva uma função chamada consultaPosição. A função deve receber um valor como parâmetro. Identifique na lista qual a posição do elemento.
// Caso consiga identificar o elemento na lista: "O valor procurado está na posição: x ". Caso não: "Valor não encontrado".

function consultaPosicao(valorNaLista) {
  for (let i = 0; i < listaDeElementos.length; i++) {
    if (listaDeElementos[i] == valorNaLista) {
      return `O valor procurado está na posição: ${i}.`;
    }
  }
  return 'Valor não encontrado';
}

console.log(consultaPosicao(5));

// Exercício 6 //
console.log('Exercício 6');
// Escreva uma função chamada removerElementoEspecifico. A função deve receber um valor como parâmetro.
// O valor recebido representa o elemento a ser deletado. ⁠Busque a posição do elemento na lista (use o indexOf()). Use a posição encontrada para realizar a remoção.
// Caso a remoção seja realizada, retorne: "Elemento x deletado com sucesso". Caso contrário, retorne: "Elemento não encontrado".

function removerElementoEspecifico(valor) {
  if (listaDeElementos.includes(valor)) {
    listaDeElementos.splice(listaDeElementos.indexOf(valor), 1);

    return `Elemento ${valor} deletado com sucesso`;
  } else {
    return 'Elemento não encontrado';
  }
}

console.log(listaDeElementos);
console.log(removerElementoEspecifico(7));
console.log(listaDeElementos);

// Exercício 7 //
console.log('Exercício 7');
// Escreva uma função chamada inserirNaPosicaoCorreta. A função pode receber um valor de 0 a 10 ou uma string.
// Caso o valor recebido seja do tipo número, a função deve conseguir inserir o elemento na primeira posição da lista, caso seja um texto a inserção deve ser feita na última posição.
// Retorne: "Lista atualizada com sucesso".

function inserirNaPosicaoCorreta(valor) {
  if (typeof valor == 'number') {
    listaDeElementos.unshift(valor);
  } else {
    listaDeElementos.push(valor);
  }

  return 'Lista atualizada com sucesso.'
}

console.log(listaDeElementos);
console.log(inserirNaPosicaoCorreta(30));
console.log(listaDeElementos);
console.log(inserirNaPosicaoCorreta('8'));
console.log(listaDeElementos);

