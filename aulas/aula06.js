// Aula: Criando objetos e classes em JS

// objeto 1
const pessoa = {nome: "Vitor", idade: 25};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

// atribuindo 
pessoa.altura = 1.71;

// deletando um atributo
delete pessoa.nome;
console.log(pessoa);