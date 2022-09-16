import { getPokemonBgColor } from "./../js/getPokemonColor";

export default function PokemonElement({ types }) {
  return (
    <div className="flex justify-center">
      {types.map((type) => {
        const { name, url } = type.type;
        // console.log(name)
        const regex = /https:\/\/pokeapi.co\/api\/v2\/type\/|\//g;
        const key = url.replace(regex, "");
        // const stringName = name.toString()
        // console.log(stringName)
        return (
          <p
            key={key}
            className={`${getPokemonBgColor(name)} text-white m-1 p-1 px-3 rounded-2xl font-bold mx-3 first-letter:uppercase`}>
            {name}
          </p>
        );
      })}
    </div>
  );
}
