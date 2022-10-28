const fetch = require('cross-fetch');
// const pokemon = require('./pokemon.text.json');
async function getData() {
  let data = [];
  let res = fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905")
  return res;
}

console.log(getData().then((res) => {
  return res.json()
}).then((pokemon) => {
  let data = [];
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
  return data;
})
.catch((err) => {
  console.error(err);
})
);

// let timeout = 1000;
// setTimeout(() => console.log(JSON.parse(JSON.stringify(returnVal))), timeout)
// setTimeout(() => console.log(returnVal[0].id), timeout)
// setTimeout(() => console.log(returnVal[0].name), timeout)
// setTimeout(() => console.log(returnVal[0].sprites.other['official-artwork'].front_default), timeout)
// setTimeout(() => console.log(returnVal[0].types), timeout)