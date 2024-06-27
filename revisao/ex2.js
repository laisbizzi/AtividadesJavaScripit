//Crie uma variável numero que receba através do prompt um número digitado pelo usuário.
//Crie uma estrutura condicional que verifica se numero é maior que 5 e,
//se for, exiba "O número é maior que 5".

const prompt = require("prompt-sync")();
let pergunta = prompt("Digite um número: ");

if (pergunta > 5) {
  console.log("Seu número é maior que 5.");
} else {
  console.log("Seu número é menor que 5.");
}
