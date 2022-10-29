import Card from "./components/Card";
const fetch = require("cross-fetch");
// getServerSideProps();
export default async function Page() {
    const data = await getData();

    return (
        <div className="flex flex-wrap justify-start">
            <Card
                id="#001"
                name="Bulbasaur"
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                types="poison grass"
            />
            {/* {data.map((pokemon) => (
                <Card id={pokemon.id} name={pokemon.name} image={pokemon.sprites.other['official-artwork'].front_default} types="stufs" />
            ))} */}
            
        </div>
    );
}

export async function getData() {
    let data = [];
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905")
        .then((res) => {
            if (res.status >= 400) throw new Error("Error");
            return res.json();
        })
        .then((pokemon) => {
            pokemon.results.map((pokemon) => {
                fetch(pokemon.url)
                    .then((res) => {
                        if (res.status >= 400) throw new Error("Error");
                        return res.json();
                    })
                    .then((pokemon) => {
                        data.push(JSON.parse(JSON.stringify(pokemon)));
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            });
        })
        .catch((err) => {
            console.error(err);
        });
        return data;
}



