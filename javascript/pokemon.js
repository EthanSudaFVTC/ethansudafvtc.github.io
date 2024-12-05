
// // code to add image to the page --- 
// const img = document.createElement('img')
// img.src = // url of the image from the 'front_default' property
// img.alt = // name of the pokemon
// parentElement.append(img)

// // code to get a random pokemon --- 
// const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)


const getRandomPokemon = async () => {

    // get url and fetch pokemon data
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)

    // check response
    if (!response.ok) {
        throw new Error("Couldn't fetch")
    }

    // put pokemon into const and return it
    const randomPokemon = await response.json()
    return randomPokemon
}

const renderPokemon = (randomPokemon) => {

    // put html elements into consts
    const parentElement = document.getElementById("random-pokemon")
    const img = document.createElement('img')
    // define image
    img.src = randomPokemon.sprites.front_default
    img.alt = randomPokemon.name
    // Clear previous images
    parentElement.innerHTML = '' 
    // add the image
    parentElement.append(img)
}

// call both functions
(async () => {
    try {
        // put random pokemon into const
        const pokemon = await getRandomPokemon()
        // pass pokemon into renderPokemon
        renderPokemon(pokemon)
    } catch (error) {
        console.error(error)
    }
})()