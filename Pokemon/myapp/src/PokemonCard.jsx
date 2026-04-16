import { useEffect, useState } from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemonId = "golem" }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [pokemonId]);

  if (!pokemon) return <div className="retro-loader">LOADING...</div>;

  return (
    <div className="pokedex-case">
      <div className="screen-border">
        <div className="screen">
          <header className="pokemon-header">
            <span className="id-tag">No. {pokemon.id}</span>
            <h2 className="pixel-name">{pokemon.name.toUpperCase()}</h2>
          </header>

          <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            className="pixel-sprite" 
          />

          <div className="stats-grid">
            {pokemon.stats.map(s => (
              <div key={s.stat.name} className="stat-row">
                <span className="stat-label">{s.stat.name.substring(0, 3).toUpperCase()}</span>
                <div className="stat-bar-bg">
                  <div 
                    className="stat-bar-fill" 
                    style={{ width: `${(s.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="types-row">
            {pokemon.types.map(t => (
              <span key={t.type.name} className={`type-tag ${t.type.name}`}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;