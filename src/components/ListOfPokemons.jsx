import React from "react";
import PokemonCard from "./PokemonCard";

export default function ListOfPokemons({ pokemons }) {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 justify-items-center m-auto w-3/5">
      {
      pokemons.map(({abilities, height, id, name, img, stats, types, weight}) => {
        return <PokemonCard 
        key={id}
        abilities={abilities}
        height={height}
        id={id}
        name={name}
        img={img}
        stats={stats}
        types={types}
        weight={weight}
        />
      })
      }
    </div>
  );
}