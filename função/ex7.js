//Crie uma função que receba uma array como parâmetro e retorne a soma de todos os números da array.

const arr = [2, 4, 6, 8];
let resultado = 0;
function soma(numeros) {
  for (let i = 0; i < arr.length; i++) {
    resultado = resultado + arr.at(i);
  }
  console.log(resultado);
}
soma(arr);
