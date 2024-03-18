alert("Olá mundo, Sejam bem-vindos ao jogo dos números secretos!");

const numeroSecreto = 29;

console.log("Número secreto: " + numeroSecreto);

console.log(`Comparação: ${resposta == numeroSecreto}`);

    var resposta = prompt("Escolha um número entre 1 e 30: ");

    if (resposta == numeroSecreto) {
        alert(`Acertou, Parabéns! Número secreto: ${numeroSecreto}`);
    } if (resposta > numeroSecreto) {
        alert(`O número secreto é menor.`);
    } else {
        alert(`O número secreto é maior.`);
    }