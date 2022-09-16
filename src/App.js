import React, { useEffect, useState } from "react";
import "./App.css";
import getPokemonData from "./services/getPokemonData";
import ListOfPokemons from "./components/ListOfPokemons";

function App() {
  const [pokemons, setPokemoms] = useState([]);

  useEffect(() => {
    getPokemonData().then((pokemons) => setPokemoms(pokemons));
  }, []);


  return (
    <div className="App">
      <h1 className="text-3xl text-black">Pokedex</h1>
      <h2 className="text-black">Astudillo Perez Edwin Uriel</h2>
      <ListOfPokemons pokemons={pokemons} />
    </div>
  );
}

export default App;
