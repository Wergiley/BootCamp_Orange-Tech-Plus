// Aula: Criando uma tabuada.

var n = 5;
console.log('Tabuada de: '+n);
for(let i = 1; i <= 10; i++) {
    console.log(i+' x '+n+' = '+(i * n));
}

// criando uma lista de numeros e imprimindo numeros pares.

const lista = [10, 20, 8, 2, 3, 5, 10, 12, 18, 9, 29, 34, 21, 4];
console.log('NUMEROS PARES:');
for(let ini = 0; ini <= lista.length; ini++) {
    if(lista[ini] % 2 == 0) {
        let par = lista[ini];
        console.log(par);
    }
}
console.log('NUMEROS IMPARES:');
for(let i2 = 0; i2 <= lista.length; i2++) {
    if(lista[i2] % 2 != 0) {
        let impar = lista[i2];
        console.log(impar);
    }
}