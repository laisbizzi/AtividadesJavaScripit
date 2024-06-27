//Crie uma lista com pelo menos 10 números aleatórios.
//Crie uma variável soma que inicie em 0.
//Crie um loop for que realize a soma de cada elemento da lista.
//Exiba a soma.

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let soma = 0;

for (let i = 0; i < arr.length; i++) {
  soma = soma + arr[i];
  console.log("Sua soma é:", soma);
}
