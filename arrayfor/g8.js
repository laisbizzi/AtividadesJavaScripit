// O objetivo do desafio é filtrar números duplicados de uma lista. Por fim, ordenar e exibir a lista.
// Utilize a seguinte lista:  5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1
//Crie um loop for que verifique cada elemento da lista. Se um elemento for encontrado novamente, deve ser deletado da lista.
//Após o loop, organize a lista e exiba no console.

const arr = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];
for (let i = 0; i < arr.length; i++) {
  if (i != arr.indexOf(arr[i])) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr.sort());
