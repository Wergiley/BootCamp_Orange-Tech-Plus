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

// praticando a resolução do exercício da aula:

function comparaPessoa(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p1.idade == p2.idade) {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    } else {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }
}

const paula = new Pessoa3('Paula', 40);
const renan = new Pessoa3('Renan', 40);

comparaPessoa(paula, renan);

// Exercício da aula: Na próxima aula...