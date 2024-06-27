const prompt = require("prompt-sync")();

function soma(numero1, numero2) {
  return numero1 + numero2;
}

function subtracao(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
  return numero1 * numero2;
}

function divisao(numero1, numero2) {
  return numero1 / numero2;
}

while (true) {
  let pergunta = Number(prompt("Digite um número: "));
  let pergunta2 = Number(prompt("Digite um outro número: "));
  let pergunta3 = prompt("Qual operação você deseja realizar?: ");
}

let resultado;
if (pergunta3 == "adicao") {
  resultado = soma(numero1, numero2);
} else if (pergunta3 == "subtracao") {
  resultado = subtracao(numero1, numero2);
} else if (pergunta3 == "multiplicacao") {
  resultado = multiplicacao(numero1, numero2);
} else {
  pergunta3 == "divisao";
  resultado = divisao(numero1, numero2);
}

console.log(resultado);
const pergunta4 = prompt("Deseja fazer mais algum cálculo? ");
if (pergunta4 == "nao") {
  console.log("Finalizado.");
}
