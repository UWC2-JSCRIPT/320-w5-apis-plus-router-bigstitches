import React, {useState, useRef, useEffect} from 'react';
// import negPokemon from './data/cart-arrow-down-solid.svg';
// import posPokemon from './data/cart-shopping-solid.svg';
import PropTypes from 'prop-types';
import CompareButton from './CompareButton';
/**
 * Cart Component as CLASS that shows cart empty or full
 * Cost of each rental is stored in Cart's state
 * Ability to change whether VacationRental inCart property
 * is passed as function, inCart also passed to change image
 */
function AddPokemon(props) {
  AddPokemon.defaultProps = {
    modList: () => [],
    pokemon: {},
  };
  AddPokemon.propTypes = {
    modList: PropTypes.func,
    pokemon: PropTypes.object,
  };
    const [thisPokeBool, addPoke] = useState(false);
    const mountedRef = useRef();
    /**
    * useEffect() wrapped around Parent method 'updateCart'
    * to ensure item is mounted.
    */
    useEffect(() => {
      if (mountedRef.current) {
        props.modList(props.pokemon, thisPokeBool);
        mountedRef.current = false;
        // console.log(`${props.pokemon.name} and ${thisPokeBool}`);
      }
    }, [thisPokeBool]);

  return (
    <li>
      {props.pokemon.name}
      <CompareButton
        addPoke = {() => addPoke((thisPokeBool) => {
          // not dependant on state change
          mountedRef.current = true;
          return !thisPokeBool;
        })}
        inList = {thisPokeBool}>
      </CompareButton>
    </li>
  );
}

export default AddPokemon;
