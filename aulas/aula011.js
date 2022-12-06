// Aula: Lista de exercícios: 
/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um numero de 1 a 100;
    Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.
    Dados de entrada: 5, 50, 10, 98, 23. Saída: 98.
*/

const entrada = [5, 50, 98, 10, 23, 99, 11, 22];
let i = 0;

function gets() {
    const lista = entrada[i];
    i++
    return lista;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};

