 //   const funcoes = require('./aula010');

 //   console.log(funcoes.gets());

// const {gets, print} = require('./aula010');

// print(gets());



const {gets, print} = require('./aula011');

// 01

/*let numerosSorteados = [];

for(let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for( let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }

}

print(maiorValor);*/

// 02

const totalNumeros = gets();
let numeroMaior = 0;

for(let i = 0; i < totalNumeros; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > numeroMaior) {
        numeroMaior = numeroSorteado;
    } 
}

print(numeroMaior);