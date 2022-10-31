import Link from "next/link";
import Card from "./components/Card";
import pokemons from './pokemons.json'

export default async function Page() {
    // console.log(pokemons)
    return (
        <div className="flex flex-wrap justify-evenly">
            {pokemons.map((pokemon) => {
                // {console.log(1)}
                return (
                    <Link href="/" key={pokemon.id}>
                        <Card 
                            id={idZeroHanlder(pokemon.id)} 
                            name={pokemon.name} 
                            image={pokemon.sprite} 
                            types={pokemon.types} 
                            key={pokemon.id}/>
                        </Link>
                )
            })}
        </div>
    );
}

function idZeroHanlder(num) {
    if(num < 10) return "00" + num;
    if(num < 100) return "0" + num;
    return num;
}