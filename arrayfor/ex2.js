//Crie uma lista vazia chamada strings e outra chamada numbers. Utilize também a seguinte lista:
//Crie um loop for que verifique cada elemento da lista. Para cada elemento, verifique se é um number ou uma string.
//Se for number ⇒ adicione na lista numbers.
//Se for string ⇒ adicione na lista strings.

const strings = [];
const number = [];
const lista = [
  "Kairi",
  24,
  "Henrik",
  35,
  8,
  102,
  "Makenna",
  "Armani",
  7,
  "Zole",
  64,
  2,
  4,
  "Nathanael",
  "Elina",
  5,
  "Grady",
  32,
  1,
  "Cora",
  23,
  "Jayce",
  5,
  "Mya",
  55,
  "Bjorn",
  40,
];

for (let i = 0; lista.length; i++) {
  if (typeof lista[i] === typeof "") {
    strings.push[i];
  } else if (typeof lista[i] === typeof 1) {
    number.push[i];
  }
}
console.log("Lista number: ", number);
console.log("Lista string: ", strings);
