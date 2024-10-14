// Exercício - Itens para Acampar //
// Você e seus amigos decidiram ir acampar. Antes de mais nada fizeram uma lista, onde cada amigo deve comprar 5 itens para levar para a viagem.
// Cada amigo ficou responsável por uma seção de itens. As seções são: Higiene, Alimentação, Farmácia e Lazer. Seus amigos devem trazer exatamente cinco itens de cada seção. Todos os itens serão colocados juntos na caixa de suprimentos.
// Cada amigo representa um array e a caixa de suprimentos é a composição destes arrays. Você deve colocar os itens dentro da caixa de forma organizada, separando as seções, afinal de contas, não queremos nossos marshmallows com gosto de desinfetante.

let caixaDeSuprimentos = [
];

let higiene = ['Sabonete', 'Pasta de dente', 'Escova', 'Fio dental', 'Toalha'];
let alimentacao = ['Pão de forma', 'água', 'Salsicha', 'Molho de tomate', 'Milho'];
let farmacia = ['Curativo', 'Dorflex', 'Atroveran', 'Dipirona', 'Eno'];
let lazer = ['Bola de futebol', 'Raquete', 'Peteca', 'Bola de tênis', 'Io-io'];

caixaDeSuprimentos = [higiene, alimentacao, farmacia, lazer];

if(caixaDeSuprimentos.length == 4) {
    let flag = false;
    for(let i= 0; i < caixaDeSuprimentos.length; i++) {
        const secao = caixaDeSuprimentos[i];
        if(secao.length < 5) {
            alert('Precisamos de mais itens desta seção.');
            flag = true;
        } else if(secao.length > 5) {
            alert('Tem itens demais, não precisamos de tantos.');
            flag = true;
        }
    }
    if(flag == false) {
        alert('Podemor ir acampar.');
    }
}

if(caixaDeSuprimentos.length < 4) {
    alert('Algum amigo ainda não retornou com os itens.');
} else if(caixaDeSuprimentos.length > 4) {
    alert('Acho que temos um intruso');
}


    
