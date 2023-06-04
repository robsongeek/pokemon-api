import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./Pokedex";
import Pokeinfo2 from "./Pokeinfo2";
import { PokemonDetails } from "./Pokeinfo2";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
