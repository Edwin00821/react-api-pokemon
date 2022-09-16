import { getPokemonBgColor, getPokemonTxtColor } from "./../js/getPokemonColor";
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
  return (
    <div className="h-full w-72 bg-white shadow-2xl p-3 rounded-2xl">
      <section
        className={`${getPokemonBgColor(types[0].type.name)} rounded-2xl pb-2`}
      >
        <div className="text-2xl font-bold text-center flex p-5 justify-between">
          <h2 className="text-white uppercase">{name}</h2>
          <p>#{id}</p>
        </div>
        <div className="flex justify-center">
          <img src={img} alt={name} className="-mt-5 -mb-20" />
        </div>
        <div className="bg-white mx-2 rounded-2xl p-5 pt-20">
          <PokemonElement types={types} />
          <div>
            <h3
              className={`${getPokemonBgColor(
                types[0].type.name
              )} font-bold text-center m-3 text-xl`}
            >
              About
            </h3>
            <section className="grid grid-cols-3 text-black">
              <div>
                <h3 className="font-semibold">Weight</h3>
                <p>0.{weight} kg</p>
              </div>
              <div>
                <h3 className="font-semibold">Height</h3>
                <p>0.{height} m</p>
              </div>
              <div>
                <h3 className="font-semibold">Abilitie</h3>
                <p className="first-letter:uppercase">{abilities}</p>
              </div>
            </section>
          </div>
          <div>
            <h3 className={`${getPokemonTxtColor(types[0].type.name)} font-bold text-center m-3 text-xl`}>
                Base Stats
            </h3>
            <section className="grid grid-cols-3"></section>
          </div>
        </div>
      </section>
    </div>
  );
}
