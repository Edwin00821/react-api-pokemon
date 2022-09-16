
export default async function getPokemonData () {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    return fetch(apiUrl, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((response) => {
          const { results = [] } = response;
          if (Array.isArray(results)) {
            //console.log('results', results);

            const POKES = Promise.all(
                results.map(async ({ url }) => await getPokemonDataById(url))
            )
            return POKES;
            }
        })
        .catch((error) => console.log(error));
}

async function getPokemonDataById (url) {
    return fetch(url, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((response) => {

            return {
                abilities: response.abilities[0].ability.name, 
                height: response.height, 
                id: response.id, 
                name: response.name, 
                img: response.sprites.other['official-artwork'].front_default, 
                stats: response.stats, 
                types: response.types, 
                weight: response.weight}
             
            });
            
}