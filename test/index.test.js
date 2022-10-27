const fetch = require('cross-fetch');
// const pokemon = require('./pokemon.text.json');


let poke = [];

fetch('https://pokeapi.co/api/v2/pokemon/' + 100)
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then(pokemon => {
    console.log(pokemon.forms[0].name)
    poke[0] = pokemon.forms[0].name
  })
  .catch(err => {
    console.error(err);
  });

// console.log(poke.forms);

// console.log(poke.forms[0].name) //name
// console.log(poke.sprites.other['official-artwork']); // pic
// console.log(typesFinder())


// function typesFinder() {
//     pokeTypes = ""
//     poke.types.map(type => {
//         pokeTypes += type.type.name + " ";
//     })
//     return pokeTypes;
// }


setTimeout(() => {console.log(poke)}, 1000)