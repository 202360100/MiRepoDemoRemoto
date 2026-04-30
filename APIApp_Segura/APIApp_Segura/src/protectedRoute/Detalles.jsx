import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detalles() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            setPokemon(data);
        };

        fetchPokemon();
    }, [id]);

    if (!pokemon) return <p>Cargando...</p>;

    return (
        <div style={{padding: "20px"}}>
            <h1>{pokemon.name}</h1>

            <img src={pokemon.sprites.front_default} />

            <h3>Stats</h3>
            <ul>
                {pokemon.stats.map(s => (
                    <li key={s.stat.name}>
                        {s.stat.name}: {s.base_stat}
                    </li>
                ))}
            </ul>

            <h3>Tipos</h3>
            <ul>
                {pokemon.types.map(t => (
                    <li key={t.type.name}>{t.type.name}</li>
                ))}
            </ul>
        </div>
    );
}