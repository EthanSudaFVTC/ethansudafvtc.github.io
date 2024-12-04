// page for lecture code and exercises

// -- Week 8 --

// MY ATTEMPT

// (async () => {
//     const reponse = await fetch('https://pokeapi.co/api/v2/pokemon/{pokemon-name')
//     const data = await Response.json()
//     const pokemonName = data.results

//     const isReuniclus = type => type.toLowerCase().includes('reuniclus')

//     pokemonName
//         .filter(({ pokemon_name }) => isReuniclus(pokemon_name))
//         .forEach(({ reuniclus }) => {
//             console.log(json.pokemonName)
//         })
// })()

// needed async function

(async () => {

    const https = require('https')
    
    const getJsonFrom = async url => {
        return new Promise(resolve => {
            https.get(url, response => {
                let body = ''
                response.on('data', data => body += data.toString())
                response.on('end', () => resolve(JSON.parse(body)))
            })
        })
    }
    
// REAL SOLUTION

const getPokemonStats = async pokemon => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const json = await getJsonFrom(url)
    const { id, name, height, weight } = json
    return { id, name, height, weight }
}

const reuniclus = await getPokemonStats('reuniclus')
//const reuniclus = await getPokemonStats(579) // the api also lets us use the id
console.log(reuniclus)

})()

