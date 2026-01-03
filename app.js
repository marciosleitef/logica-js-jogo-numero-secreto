let listaDeNumerosSorteados = []
let numerosMaximos = 100;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
exibirMensageminicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}
function exibirMensageminicial() {
    exibirTextoNaTela('h1', 'O jogo do número secreto');
    exibirTextoNaTela('p', 'Descubra o número secreto entre 0 e ' + numerosMaximos);
}

function verificarChute() {
    let chute = Number(document.querySelector("input").value);

    let palavraTentativa = tentativas > 1 ? ' tentativas.' : ' tentativa.';
    let mensagemDeTentativas = 'você descobriu o número secreto com '+ tentativas + palavraTentativa;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagemDeTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'O número secreto é menor!');
        exibirTextoNaTela('p', 'Tente novamente.');
    } else {
        exibirTextoNaTela('h1', 'O número secreto é maior!');
        exibirTextoNaTela('p', 'Tente novamente.');
    }
    tentativas++;
    limparCampoInput();
}

function gerarNumeroSecreto() {
   let numeroEscolhido = parseInt(Math.random() * numerosMaximos + 1);
   let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeNumerosNaLista >= numerosMaximos) {
    listaDeNumerosSorteados = []
   }    

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroSecreto();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}
function limparCampoInput() {
    chute = document.querySelector('input')
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    exibirMensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparCampoInput();
}

document.querySelector('input').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarChute();
    }
});