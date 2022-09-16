export const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=151`

export const OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const TYPES = {
  NORMAL: 'normal', FIGHTING: 'fighting', FLYING: 'flying',
  POISON: 'poison', GROUND: 'ground', ROCK: 'rock',
  BUG: 'bug', GHOST: 'ghost', STEEL: 'steel',
  FIRE: 'fire', WATER: 'water', GRASS: 'grass',
  ELECTRIC: 'electric', PSYCHIC: 'psychic', ICE: 'ice',
  DRAGON: 'dragon', DARK: 'dark', FAIRY: 'fairy',
  UNKNOWN: 'unknown', SHADOW: 'shadow',
}