//Crie uma variável soma e realize a soma de cada elemento da matriz.

const arr = [
  [10, 20, 60],
  [8, 10, 52],
];

let soma = 0;
for (let linha = 0; linha < arr.length; linha++) {
  for (let coluna = 0; coluna < arr[linha].length; coluna++) {
    soma = soma + arr[linha][coluna];
  }
}
console.log("Sua soma é: ", soma);
