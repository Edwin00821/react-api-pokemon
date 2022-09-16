import React from "react";
import getPokemonColor from "../js/getPokemonColor";
import PokemonElement from "./PokemonElement";

export default function PokemonCard({
  abilities,
  height,
  id,
  img,
  name,
  stats,
  types,
  weight,
}) {
    let color = getPokemonColor(types[0].type.name)
    
  return (
    <div className="bg-white shadow-2xl p-3 rounded-2xl ">
            <div className={`bg-${color} rounded-2xl pb-2`}>
                <div className="text-2xl font-bold text-center flex p-5 justify-between  ">
                <h2 className="text-white uppercase">{ name }</h2>
                <p >#{ id }</p>
                </div>
                <div className="flex justify-center">
                    <img src={img} alt={name} className=' -mt-5 -mb-20 ' />
                </div>
                <div className="bg-white mx-2 rounded-2xl p-5 pt-20">
                    
                        <PokemonElement types={ types }/>
                    
                    <div className="">
                        <h3 className={`bg-${color} font-bold text-center m-3 text-xl`}>About</h3>
                        <div className="grid grid-cols-3 text-black">
                            <div className="">
                            <p className="">0.{ weight } kg</p>
                            <p className="">Weight</p>
                            </div>
                            <div className="">
                            <p className="">0.{ height } m</p>
                            <p className="">Height</p>
                            </div>
                            <div className="">
                            <p className="first-letter:uppercase">{ abilities }</p>
                            <p className="">Abilitie</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h3 className={`text-${color} font-bold text-center m-3 text-xl`}>Base Stats</h3>
                        <div className="grid grid-cols-3"> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
