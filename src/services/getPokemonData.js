import { apiURL, OPTIONS } from '../js/variables.js'

export async function getPokemonData() {
  return fetch(apiURL, OPTIONS)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      if (Array.isArray(results)) {
        return Promise.all(
          results.map(async ({ url }) => await getPokemonDataById(url))
        )
      }
    }) 
    .catch(error => console.error(error))
}

async function getPokemonDataById(url) {
  return fetch(url, OPTIONS)
    .then(res => res.json())
    .then(response => {
      return {
        abilities: response.abilities[0].ability.name,
        height: response.height,
        id: response.id,
        name: response.name,
        img: response.sprites.other['official-artwork'].front_default,
        stats: response.stats,
        types: response.types,
        weight: response.weight,
      }
    })
}
