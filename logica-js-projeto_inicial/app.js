alert('Boas vindas ao jogo do número secreto'); //alert: cria um pop-up ao abrir o site
let numeroSecreto = parseInt(Math.random() * 100 + 1); //let: cria variável
//parseInt: transforma o número em inteiro
//Math.random: gera um número aleatório entre [0, 1[
console.log('Número secreto: ' + numeroSecreto);
//prompt('Escolha um número entre 1 e 30'); //prompt :cria um pop-up que permite que o usuário insira algo
//let chute = prompt('Escolha um número entre 1 e 30'); //armazena o que o usuário insireriu em uma variável
let chute
//console.log('Valor do chute: ', chute);
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    console.log('Resultado da comparação: ', chute == numeroSecreto);
    console.log('Valor do chute: ', chute);
    if (chute == numeroSecreto) {
        //console.log('Isso aí! Você descobriu o número secreto'); //console.log: aparece a mensagem no console ao inspecionar elemento, para desenvolvedor
        //alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
        break;
    } else {
        //console.log('Valor do número secreto: ', numeroSecreto);
        //alert('Você errou :(');
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' //operador ternário
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
