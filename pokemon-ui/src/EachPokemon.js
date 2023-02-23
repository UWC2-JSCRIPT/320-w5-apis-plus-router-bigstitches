import React from 'react';
import PropTypes from 'prop-types';

function EachPokemon(props) {
  EachPokemon.defaultProps = {
    img: '',
    baseExperience: '',
    weight: '',
    pokeName: ''
  };
  EachPokemon.propTypes = {
    img: PropTypes.string,
    baseExperience: PropTypes.string,
    weight: PropTypes.string,
    pokeName: PropTypes.string
  };
  return (
    <div>
      <p>{props.pokeName}</p> 
      <p>{props.img}</p>
      <p>{props.baseExperience}</p>
      <p>{props.weight}</p>
    </div>
  );
}

export default EachPokemon;
