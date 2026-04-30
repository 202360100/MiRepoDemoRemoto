import { useState } from "react";

export default function Filtrar() {

    const [nombre, setNombre] = useState("");
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState("");

    const buscar = async () => {
        try {
            setError("");
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
            
            if(!res.ok) throw new Error();

            const data = await res.json();
            setPokemon(data);

        } catch {
            setPokemon(null);
            setError("Pokémon no encontrado");
        }
    };

    return (
        <div style={{padding: "20px"}}>
            <h1>Filtrar Pokémon</h1>

            <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: pikachu"
            />

            <button onClick={buscar}>Buscar</button>

            {error && <p>{error}</p>}

            {pokemon && (
                <div style={{marginTop: "20px"}}>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} />
                </div>
            )}
        </div>
    );
}