import React, { useState } from "react";
import styled from "styled-components";

const Searchbar = (props) => {
  const [search, setSearch] = useState("dito");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <SearchbarContainer>
      <SearchbarCSS>
        <SearchbarInput placeholder="Buscar pokemon" onChange={onChangeHandler} />
      </SearchbarCSS>
      <div>
        <SearchbarBtn onClick={onButtonClickHandler}>Buscar</SearchbarBtn>
      </div>
      <div>
        <SearchbarBtn2 onClick={onButtonClickHandler}>Trocar o tema</SearchbarBtn2>
      </div>
    </SearchbarContainer>
  );
};

const SearchbarContainer = styled.div`
  display: flex;
  margin: 0px auto;
  padding: 0 20px;
  align-items: center;
  background-color: #0e6f;
`;

const SearchbarCSS = styled.div`
  margin-right: 20px;
`;

const SearchbarBtn = styled.button`
  background-color: #0e6f9f;
  border: none;
  border-radius: 10px;
  height: 44px;
  color: white;
  padding: 10px 12px;
`;

const SearchbarBtn2 = styled.button`
  background-color: #0e6f9f;
  border: none;
  border-radius: 10px;
  height: 44px;
  color: white;
  padding: 10px 12px;
  margin-left: 50px;
`;

const SearchbarInput = styled.input`
  padding: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
`;

export default Searchbar;
