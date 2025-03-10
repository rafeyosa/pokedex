import { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils";

export default function SideNav(props) {
  const {
    selectedPokemon,
    setSelectedPokemon,
    showSideMenu,
    handleCloseMenu,
  } = props;
  const [seachValue, setSearchValue] = useState("");

  const filteredPokemon = first151Pokemon.filter((val, valIndex) => {
    if (getFullPokedexNumber(valIndex).includes(seachValue)) {
      return true;
    }
    if (val.toLowerCase().includes(seachValue.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <nav className={showSideMenu ? "open" : ""}>
      <div className={"header " + (showSideMenu ? "open" : "")}>
        <button className="open-nav-button" onClick={handleCloseMenu}>
          <i class="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className="text-gradient">Pokedex</h1>
      </div>
      <input
        type="text"
        value={seachValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="E.g. 901 or Bulba..."
      />
      {filteredPokemon.map((pokemon) => {
        const pokedexIndex = first151Pokemon.indexOf(pokemon);
        return (
          <button
            key={pokedexIndex}
            className={
              "nav-card " +
              (pokedexIndex === selectedPokemon ? "nav-card-selected" : " ")
            }
            onClick={() => {
              setSelectedPokemon(pokedexIndex)
              handleCloseMenu()
            }}
          >
            <p>{getFullPokedexNumber(pokedexIndex)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
