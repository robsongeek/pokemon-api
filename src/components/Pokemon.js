import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import styled from "styled-components";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
  return (
    <PokemonCard>
      <PokemonImageContainer>
        <PokemonImage
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          
        />
      </PokemonImageContainer>
      <CardBody>
        <CardTop>
          <CardTopH3> {pokemon.name}</CardTopH3>
          <div>#{pokemon.id}</div>
        </CardTop>
        <CardBottom>
          <PokemonType>
            {pokemon.types.map((type, index) => {
              return (
                <PokemonTypeText key={index}>
                  {type.type.name}
                </PokemonTypeText>
              );
            })}
          </PokemonType>
          <PokemonHeartBtn onClick={onHeartClick}>
            {heart}
          </PokemonHeartBtn>
        </CardBottom>
      </CardBody>
    </PokemonCard>
  );
};

const PokemonCard = styled.div`
background-color: yellow;
  display: flex;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin: 10px;
`;

const PokemonImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;
const PokemonImageContainer = styled.div`
  padding: 0px 5px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 0px;
  flex: 1;
`;
const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardTopH3 = styled.h3`
text-transform: capitalize;
`;
const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const PokemonType = styled.div`
  display: flex;
`;
const PokemonTypeText = styled.div`
  margin-right: 10px;
  text-transform: capitalize;
`;
const PokemonHeartBtn = styled.button`
  border: none;
  background-color: white;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  padding: 4px;
  cursor: pointer;
  align-items: center;
`;

export default Pokemon;
