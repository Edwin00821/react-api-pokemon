import getPokemonColor from "../js/getPokemonColor";

export default function PokemonElement({types}) {
    
    return (
        <div className="flex justify-center">
        {
            types.map(({type}) => {
                return <p key={type.url} className={`bg-${getPokemonColor(type.name)} text-white m-1 p-1 px-3 rounded-2xl font-bold mx-3 first-letter:uppercase`}>{type.name}</p>
            })
        }
        </div>
    );
}