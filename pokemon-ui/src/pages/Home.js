import React from 'react';
// import logo from '../logo.svg';
import PropTypes from 'prop-types';
import pokemon from '../data/pokemonLimited.json';
import AddPokemon from '../AddPokemon';

function Home(props) {
  Home.defaultProps = {
    modList: () => [],
  };
  Home.propTypes = {
    modList: PropTypes.func,
  };

  return (
    <ul>
      {pokemon.map((eachPokemon) => (
        <AddPokemon
          key={eachPokemon.name}
          pokemon = {eachPokemon}
          modList = {props.modList}>
        </AddPokemon>
      ))}
    </ul>
  )
}

export default Home;