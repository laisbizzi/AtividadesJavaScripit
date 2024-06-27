//Criar um objeto chamado carro com propriedades de marca, modelo, ano e cor.
//Exiba o modelo e cor.
//Altere a cor para “jacinto.
//Adicione uma propriedade condicao e defina se é usado ou novo.
//Delete a propriedade ano.
//Exiba no console o objeto.

const carro = {
  marca: "felismovel",
  modelo: "suprarecente",
  ano: 2020,
  cor: "preto",
};

console.log(carro.modelo, carro.cor);
carro.condicao = "novo";
delete carro.ano;
console.log(carro);
