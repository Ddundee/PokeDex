import Card from "../components/Card"

export default async function Page() {
    return (
        <div className="flex flex-wrap justify-start">
            <Card number="#001" pokemonName="Bulbasaur" pokemonPicture="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" types="poison grass" />

            
        </div>
    )
}