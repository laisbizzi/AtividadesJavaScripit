//Crie um objeto chamado pessoa com as seguintes propriedades: nome, idade, profissão, e país.
//Cada propriedade precisa possui algum valor atribuído, seja criativo.
//Exiba no console o nome e a idade.
//Altere a profissão para “vendedor da shopee”.
//Adicione uma propriedade email e atribua um email.
//Delete a propriedade país.
//Exiba no console o objeto.

const pessoa = {
  nome: "lala bizzu",
  idade: 16,
  profissão: "mera estudante do ensino médio",
  país: "jardim aeroporto",
};
console.log(pessoa.nome, pessoa.idade);

pessoa.profissão = "vendedora da shopee";
pessoa.email = "lalabizzufelisbina@gmail.com";

delete pessoa.país;
console.log(pessoa);
