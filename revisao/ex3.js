//Crie uma variável letra que receba através do prompt uma letra digitada pelo usuário.
//Crie uma estrutura condicional usando switch case que verifique:
//Se for a letra A, deve exibir “letra a digitada”;
//Se for a letra B, deve exibir “letra b digitada”;
//Se não for nenhum valor mencionado (default), deve exibir “o prazo para as atividades está
//entre a letra G e K do teclado”.

const prompt = require("prompt-sync")();
let letra = prompt("Digite uma letra: ");

switch (letra) {
  case "a":
    console.log("Letra a digitada.");
    break;
  case "b":
    console.log("Letra b digitada.");
    break;
  default:
    console.log(
      "O prazo para as atividades está entre a letra G e K do teclado ;)"
    );
}
