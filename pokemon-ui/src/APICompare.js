import React from 'react';
import PropTypes from 'prop-types';

function APICompare(prop) {
APICompare.defaultProps = {
  pokemonList: [],
};
APICompare.propTypes = {
  pokemonList: PropTypes.array,
};
// go through array and get lower cases
// function to lower case
let message = 'Empty Array!  Pick Pokemon in the Home page!';
// iterate through prop.pokemonList


const pokemonName = 'poohead';
// API call to the Pokemon site
function getPokemonInfo() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, { 
    // fetch(`https://fldajfld/${pokemonName}`, {    
      method: 'get',  
    })  
    .then(response => { 
      if (response.status >= 200 && response.status <= 299) {
        // you made it!
        return response.json(); 
      } if (response.status === 404) {
        throw Error(`${pokemonName} isn't in the database!`)
      }  else {
        throw Error(response.statusText);
      }
    })  
    .then(json => { 
      console.log(json); 
      // displayInfo(json);
    })
    .catch((e) => {
      // network errors
      if (e instanceof TypeError) {
        throw Error(`${e}: Check your network.
          Then check the API at https://pokeapi.co/`);
      } else {
        throw Error(`${e}`);
      }
    });
}

  return (
    <div>{getPokemonInfo()}</div>
  )
}

export default APICompare;