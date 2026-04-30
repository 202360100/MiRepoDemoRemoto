import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ user, onLogout }) {

    const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
                const data = await res.json();

                const detalles = await Promise.all(
                    data.results.map(async (p) => {
                        const res = await fetch(p.url);
                        return res.json();
                    })
                );

                setPokemons(detalles);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemons();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Dashboard</h1>
            <p>Bienvenido {user?.username}</p>

            <button onClick={() => navigate("/filtrar")}>
              Buscar Pokémon
            </button>
            <button onClick={onLogout}>Logout</button>

            <h2>Pokédex</h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "20px",
                marginTop: "20px"
            }}>
                {pokemons.map(p => (
        <div 
            key={p.id}
            onClick={() => navigate(`/detalles/${p.id}`)}
            style={{
                cursor: "pointer",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                background: "#f9f9f9"
            }}
        >
        <img src={p.sprites.front_default} />
        <h4>{p.name}</h4>
    </div>
))}
            </div>
        </div>
    );
}