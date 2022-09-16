export default function getPokemonColor (type) {
    switch (type) {
        case "normal":
        return "gray-700";
        case "fighting":
        return "red-600";
        case "flying":
        return "blue-300";
        case "poison":
        return "purple-600";
        case "ground":
        return "yellow-500";
        case "rock":
        return "yellow-700";
        case "bug":
        return "green-600";
        case "ghost":
        return "purple-800";
        case "steel":
        return "gray-500";
        case "fire":
        return "red-500";
        case "water":
        return "blue-500";
        case "grass":
        return "green-500";
        case "electric":
        return "yellow-300";
        case "psychic":
        return "pink-500";
        case "ice":
        return "blue-200";
        case "dragon":
        return "purple-400";
        case "dark":
        return "gray-800";
        case "fairy":
        return "pink-300";
        case "unknown":
        return "gray-400";
        case "shadow":
        return "gray-700";
        default:
        return "#68A090";
    }
}