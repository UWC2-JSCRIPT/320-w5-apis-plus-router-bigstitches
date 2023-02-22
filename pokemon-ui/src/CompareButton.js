import React from 'react';
// import negPokemon from './data/cart-arrow-down-solid.svg';
// import posPokemon from './data/cart-shopping-solid.svg';
import PropTypes from 'prop-types';
/**
 * Cart Component as CLASS that shows cart empty or full
 * Cost of each rental is stored in Cart's state
 * Ability to change whether VacationRental inCart property
 * is passed as function, inCart also passed to change image
 */
function AddButton(props) {
  AddButton.defaultProps = {
    addPoke: () => Boolean,
    inList: false,
  };
  AddButton.propTypes = {
    addPoke: PropTypes.func,
    inList: PropTypes.bool,
  };

  let buttonType;
  
  if (props.inList) {
    buttonType = <span>+</span>;
  } else {
    buttonType = <span>-</span>;
  }
  return (
    <div>
      <button onClick={props.addPoke}>
        {buttonType}
      </button>
    </div>
  );
}

export default AddButton;
