//Faça uma aplicação que realize as 4 operações básicas de uma calculadora: adição, subtração, multiplicação e divisão.

//Cada operação básica deve ser uma função declarada que receba como parâmetro dois números do qual irá realizar a operação e retornar o resultado.

//A aplicação deve:

//1. receber 2 números do usuário através do prompt
//2. perguntar ao usuário qual operação realizar
//3. exibir o resultado
//4. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.

const prompt = require("prompt-sync")();
let pergunta = Number(prompt("Digite um número: "));
let pergunta2 = Number(prompt("Digite um outro número: "));
let pergunta3 = prompt("Qual operação você deseja realizar?: ");

function soma(numero1, numero2) {
  while (pergunta3 == "subtração" || "Subtração") {
    console.log(numero1 - numero2);
    soma(pergunta, pergunta2);
  }
}

function subtracao(numero1, numero2) {
  while (pergunta3 == "subtração" || "Subtração") {
    console.log(numero1 + numero2);
    subtracao(pergunta, pergunta2);
    break;
  }
}

function multiplicacao(numero1, numero2) {
  while (pergunta3 == "multiplicação" || "Multiplicação") {
    console.log(numero1 * numero2);
    multiplicacao(pergunta, pergunta2);
    break;
  }
}
function divisao(numero1, numero2) {
  while (pergunta3 == "divisão" || "Divisão") {
    console.log(numero1 / numero2);
    divisao(pergunta, pergunta2);
    break;
  }
}
