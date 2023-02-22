import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
// import EachPokemon from './EachPokemon';
// import testing from './data/validJson.json'

function APICompare(prop) {
  APICompare.defaultProps = {
    pokemonList: [],
  };
  APICompare.propTypes = {
    pokemonList: PropTypes.array,
  };

  const [img, setImage] = useState();
  const [baseExperience, setExperience] = useState();
  const [weight, setWeight] = useState();
  
  function displayInfo(json) {
    setImage(json.sprites.front_default);
    setExperience(json.base_experience);
    setWeight(json.weight);  
  }
  let lclPokArrN = '';
  try {
    lclPokArrN = prop.pokemonList[0].name.toLowerCase();
  } catch (error) {
    lclPokArrN = 'ditto';
    console.log('Enter a Pokemon in main menu');
  }

  function getPokemonInfo(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    // fetch(`https:deliberategarbage`, {  
      method: 'get',  
    })
    .then(response => { 
      if (response.status >= 200 && response.status <= 299) {
        return response.json(); 
      } else if (response.status === 404) {
        throw Error(`${pokemonName} isn't in the database!`)
      } else {
        throw Error(response.statusText);
      }
    })  
    .then(allPokemon => { 
      // console.log(`HERE ${allPokemon}`); 
      return displayInfo(allPokemon);
    })
    .catch((e) => {
      // network errors
      if (e instanceof TypeError) {
        throw Error(`${e}: Check your network.
          Then check the API at https://pokeapi.co/`);
      } 
    });
  }

  useEffect(() => {
    getPokemonInfo(lclPokArrN);
  }, []);

  return (
    <div>
      <img src={img} alt="pokemon sprite"></img>
      <p>Experience: {baseExperience}</p>
      <p>Weight: {weight}</p>
    </div>
  )
}

export default APICompare;

/*
{prop.pokemonList.map((element) => {
        console.log(element.name.toLowerCase());
        console.log('in forEach pokemon loop');
        <EachPokemon
          pokeName = {element.name}
          img = {img}
          baseExperience = {baseExperience}
          weight = {weight}>
        </EachPokemon>
      })}
*/
/*
<EachPokemon
        pokeName = {lclPokArrN}
        img = {img}
        baseExperience = {baseExperience}
        weight = {weight}>
</EachPokemon>
*/