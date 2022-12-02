// Aula: Criando objetos e classes em JS

// objetos
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

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

class Pessoa4 {
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }   
}


const lucas = new Pessoa3();
lucas.nome = 'Lucas Oliveira';
lucas.idade = 23;

const pedro = new Pessoa4();
pedro.nome = "Pedro Silva";
pedro.idade = 28;


console.log(lucas);
console.log(pedro);