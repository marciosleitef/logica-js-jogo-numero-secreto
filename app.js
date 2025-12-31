let nome = prompt ('Olá, qual o seu nome?');
alert(`Olá ${nome}. Bem vindo ao jogo do número secreto`);
let numeroMaximo = 100
let numeroSecret = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao N.S.
while ( chute != numeroSecret ){
    chute = prompt('Escolha um número entre 1 e '+ numeroMaximo);
    // se chte for igual ao número secreto
    if (chute == numeroSecret) {
       break; 
    } else {
        if (numeroSecret > chute) {
            alert('número secreto é maior que '+ chute);
        } else { 
            if (numeroSecret < chute) {
                alert (' número secreto é menor que '+ chute);
            }
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`é isso ai ${nome}, voce acertou o número secrreto ${numeroSecret} com ${tentativas} ${palavraTentativa}`);