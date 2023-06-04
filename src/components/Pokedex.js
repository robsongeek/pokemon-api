import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Pokedex = (props) => {
  const {
    pokemons,
    loading,
    page,
    setPage,
    totalPages,
    infoPokemon,
    item,
  } = props;
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <PokedexCSS>
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </PokedexCSS>
      {loading ? (
        <div>Por Favor, aguarde o carregamento dos Pokemons...</div>
      ) : (
        <PokedexGrid >
          
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
            
        </PokedexGrid>
      )}
    </div>
  );
};

const PokedexCSS = styled.div`
  background-color: #0e6f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const PokedexGrid = styled.div`
  // cursor: pointer;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

export default Pokedex;
