import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

function PokemonList() {
  const pokemonIds = Array.from({ length: 21 }, (_, i) => i + 1);

  return (
    <div className="pokemon-grid">
      {pokemonIds.map((id) => (
        <PokemonCard key={id} pokemonId={id} />
      ))}
    </div>
  );
}

export default PokemonList;