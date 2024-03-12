alert("Olá mundo, Sejam bem-vindos ao jogo dos números secretos!");

const numeroSorteado = 29;

var resposta = prompt("Escolha um número entre 1 e 30: ");

if (resposta == numeroSorteado) {
    console.log("Acertouuuuuuuuu");
    alert("Acertou, Parabéns! ")
} else {
    console.log("Errado, tente novamente!");
    alert("Errado, tente novamente! ")
}