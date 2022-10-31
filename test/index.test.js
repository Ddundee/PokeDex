const fetch = require('cross-fetch');
const pokemons = require('./db.json');
const fs = require('fs');

let a, b;
for(let i = 0; i < pokemons.length; i++) {
    for(let j = 0; j < pokemons.length - 1; j++) {
        if(pokemons[j].id > pokemons[j + 1].id) {
            a = pokemons[j];
            b = pokemons[j + 1];
            pokemons[j] = b;
            pokemons[j + 1] = a;
        }
        // console.log(`Interation: ${i} - ${j}`)
    }
}

console.log(JSON.stringify(pokemons))