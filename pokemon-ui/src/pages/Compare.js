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
      <APICompare pokemonList = {prop.pokemonList}>
      </APICompare>
    </div>
  )
}

export default Compare;