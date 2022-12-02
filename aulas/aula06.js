// Aula: Criando objetos e classes em JS

// objetos e classes
const pessoa = {nome: "Vitor", idade: 25};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

// atribuindo 
pessoa.altura = 1.71;

// deletando um atributo
delete pessoa.nome;
console.log(pessoa);

const pessoa2 = {
    nome: 'João',
    idade: 14,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa2.descrever();



class Pessoa3 {
    nome;
    idade;
    nascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} nasci em ${this.nascimento}`);
    }
}

class Pessoa4 {
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }   
}


const lucas = new Pessoa3('Mateus', 30);


const pedro = new Pessoa4();
pedro.nome = 'Pedro';
pedro.idade = 28;


lucas.descrever();
pedro.descrever();