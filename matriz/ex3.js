//Exiba cada elemento da matriz.

const arr = [
  [10, 20, 60],
  [8, 10, 52],
];
for (let linha = 0; linha < arr.length; linha++) {
  for (let coluna = 0; coluna < arr[linha].length; coluna++) {
    console.log(arr[linha][coluna]);
  }
}
