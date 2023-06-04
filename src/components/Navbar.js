import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import styled from "styled-components";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <Nav>
      <div>
        <Img alt="pokeapi-logo" src={logoImg} />
      </div>
      <div>{favoritePokemons.length} ❤️ Favorite</div>
    </Nav>
  );
};

// Tem que instalar 'npm install --save styled-components@5.3.10'
const Nav = styled.nav`
  background-color: #0e6f;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Img = styled.img`
  width: 160px;
`;

export default Navbar;
