//Exiba no console a multiplicação dos elementos que estão na mesma linha.

const arr = [
  [1, 2, 3],
  [4, 5, 6],
];
let s1 = 1;
let multiplicacao = 1;
for (let linha = 0; linha < arr.length; linha++) {
  for (let coluna = 0; coluna < arr[linha].length; coluna++) {
    if (linha < 1) {
      s1 = s1 * arr[linha][coluna];
    } else {
      multiplicacao = multiplicacao * arr[linha][coluna];
    }
  }
}
console.log(s1);
console.log(multiplicacao);
