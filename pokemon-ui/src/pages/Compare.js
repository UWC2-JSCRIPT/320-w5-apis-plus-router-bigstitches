import React from 'react';
import PropTypes from 'prop-types';
import APICompare from '../APICompare';

function Compare(prop) {
Compare.defaultProps = {
  pokemonList: [],
};
Compare.propTypes = {
  pokemonList: PropTypes.array,
};
  return (
    <div>
      <ul>
        {prop.pokemonList.map((eachPokemon) => (
          <li key={eachPokemon.name}>
            {eachPokemon.name}
          </li>
        ))}
      </ul>
      <APICompare pokemonList = {prop.pokemonList}>
      </APICompare>
    </div>
  )
}

export default Compare;