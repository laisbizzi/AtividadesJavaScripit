//Crie uma função que
//receba um número como parâmetro. A função deve gerar um número aleatório e usar o número do parâmetro como
//valor máximo de aleatoriedade.

let aleatorio = 0;
function numero(numero1) {
  aleatorio = Math.floor(Math.random() * numero1);
  console.log(aleatorio);
}
numero(20);
