alert("Olá mundo, Sejam bem-vindos ao jogo dos números secretos!");

const numeroSecreto = 29;

console.log("Número secreto: " + numeroSecreto);

var resposta = prompt("Escolha um número entre 1 e 30: ");

console.log(`Comparação: ${resposta == numeroSecreto}`);

if (resposta == numeroSecreto) {
    console.log(`Número secreto: ${numeroSecreto}`);
    alert(`Acertou, Parabéns! Número secreto: ${numeroSecreto}`)
} else {
    console.log("Errado, tente novamente!");
    alert("Errado, tente novamente! ")
}