import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Compare from './pages/Compare';
import './App.css';

function App() {
  const [pokemonList, modList] = useState([]);

  let refModLocalArray;
  /**
  * local function to keep unique items only
  * @param {object} value element of array
  * @param {number} index index of element
  * @param {array} self whole array
  * @return {array} unique item
  */
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  /**
   * Change the state of the cart depnding
   * @param {object} pokemonName element to add or remove
   * @param {boolean} boolModList true ? add : remove
   */
  function refModList(pokemon, boolModList) {
    let pokemonName = pokemon.name;
    if (boolModList) {
      if (pokemonList.length === 0) {
        refModLocalArray = ([pokemon]); // simple replace
      } else {
        refModLocalArray = (pokemonList.concat(pokemonList,
            [pokemon]));
      }
    } else {
      if (pokemonList.length === 1) {
        refModLocalArray = [];
      } else {
        refModLocalArray = (
          pokemonList.filter((a) => {
            return a.name !== pokemonName;
          }));
      }
    }
    modList(refModLocalArray.filter(onlyUnique));
  } // end function refModCart(vacaElement)
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={
                <Home modList = {refModList}>
                </Home>} />
              <Route path="/compare" element={
                <Compare pokemonList = {pokemonList}>
                </Compare>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
