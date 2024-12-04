
// // code to add image to the page
// const img = document.createElement('img')
// img.src = // url of the image from the 'front_default' property
// img.alt = // name of the pokemon
// parentElement.append(img)

// // code to get a random pokemon
// const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)


const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)
    const randomPokemon = await response.json()
    return randomPokemon
}

const renderPokemon = (randomPokemon) => {
    const parentElement = document.getElementById('random-pokemon')
    const img = document.createElement('img')
    img.src = randomPokemon.sprites.front_default
    parentElement.append(img)
}

(async () => {
    const pokemon = await getRandomPokemon()
    renderPokemon(pokemon)
})