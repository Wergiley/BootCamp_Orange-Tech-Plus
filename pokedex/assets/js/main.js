function converterTypesPokemon(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${type}</li>`)
}

function converterListPokemon(pokemon) {
    return `<li class="pokemon${pokemon.type}">
            <span class="numer">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class ="types">
                    ${pokemon.types.map((type) => `<li class="${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            </li>`
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(converterListPokemon).join('')
    pokemonList.innerHTML = newHtml
})