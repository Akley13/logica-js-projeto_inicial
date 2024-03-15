const diaDaSemana = prompt("Qual é o dia da semana?");

const sabado = "sabado";
const domingo = "domingo";

if (diaDaSemana.toLowerCase() === sabado || diaDaSemana.toLowerCase() === domingo) {
    alert("Bom final de semana!");
} else {
    alert("Boa semana!");
}

console.log("Comparação (Sábado): " + (diaDaSemana.toLowerCase() === sabado));
console.log("Comparação: (Domingo) " + (diaDaSemana.toLowerCase() === domingo));