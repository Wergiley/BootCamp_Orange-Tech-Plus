// Aula: Arrays e estrutura de repetição.

const alunos = ['João', 'Pedro', 'Lucas', 'Paula','Roberta'];

console.log(alunos.pop()); // <- mostra o ultimo valor do vetor.
alunos.push('Leo'); // <- atribui um novo valor no final do vetor ou sequencial. 
console.log(alunos);

console.log(alunos.length); // mostra tamanho do vetor.

const notas = [];
notas.push(1);
notas.push(2);
notas.push(3);
notas.push(4);
notas.push(5);
notas.push(6);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5];
var media = soma / notas.length;

console.log(soma);
console.log(media);

for( let index = 0; index <= notas.length; index++) {
    console.log(index);
}

const nome = 'João Vitor Miguel';

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}