const paises = ['África do Sul','Angola','Argélia','Benim','Botsuana','Burquina Fasso','Burundi','Cabo Verde','Camarões','Chade','Comores',
'Costa do Marfim','Egito','Eritreia','Essuatíni','Etiópia','Gabão','Gâmbia','Gana','Guiné','Guiné-Bissau','Guiné-Equatorial','Jibuti','Lesoto',
'Libéria','Líbia','Madagáscar','Maláui','Mali','Marrocos','Maurícia','Mauritânia','Moçambique','Namíbia','Níger','Nigéria','Quênia',
'República Centro-Africana','República Democrática do Congo','República do Congo','Ruanda','São Tomé e Príncipe','Senegal','Serra Leoa','Seicheles',
'Sudão','Sudão do Sul','Tanzânia','Togo','Tunísia','Uganda','Zâmbia','Zimbábue'];

const text = document.getElementById('text');
const responder = document.querySelector('.submit');

let nomes = [];
let pontos = 0;

responder.addEventListener('click', () => {
    nomes = text.value.split(',');
    verificaAcerto();
    limparTela();
    exibirResultado();
});

function limparTela() {
    text.value = '';
}

function removerAcentos(texto) {
    texto = texto.replace(/[Á]/,"A");
    texto = texto.replace(/[âáã]/,"a");
    texto = texto.replace(/[ÈÉÊË]/,"E");
    texto = texto.replace(/[éê]/,"e");
    texto = texto.replace(/[õ,ó]/,"o");
    texto = texto.replace(/[ú]/,"u");
    texto = texto.replace(/[í]/,"i");
    return texto;
}

function verificaAcerto() {
    for(let i = 0; i < paises.length; i++) {
        console.log(paises[i]);
        removerAcentos(paises[i]);
        let nomeFormatado = paises[i].toLowerCase();
        paises[i] = nomeFormatado;
    }

    for(let i = 0; i < nomes.length; i++) {
        removerAcentos(nomes[i]);
        console.log(nomes[i]);
        let nomeFormatado = nomes[i].toLowerCase();
        nomes[i] = nomeFormatado;
    }

    for(let i = 0; i < nomes.length; i++) {
        if(paises.includes(nomes[i])) {
            pontos++;
        }
    }
}

function exibirResultado() {
    const resultado = document.createElement('div');
    resultado.classList.add('resultado');
    if(pontos == 0) {
        resultado.textContent = `Que pena! Você obteve 0 acertos =(`;
    }
    else {
        resultado.textContent = `Você acertou ${pontos} nome(s)! Continue estudando!`;
    }

    responder.appendChild(resultado);
}


text.addEventListener('input', () => {
    text.style.height = 'auto';
    text.style.height = (text.scrollHeight) + 'px';
});