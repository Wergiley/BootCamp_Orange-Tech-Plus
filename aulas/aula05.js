// Aula: Praticando com funções

function meuNome(nome) {
    return 'Meu nome é ' + nome;
}


function maiorIdade(idade) {
    if(idade >= 18) {
        console.log(meuNome("Wergiley ")+ "sou maior de idade");
    } else {
        console.log(meuNome("Lucas"),"é menor de idade");
    }
}

maiorIdade(25);