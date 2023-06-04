import React from "react";
import styled from "styled-components";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <PaginationCSS>
      <button onClick={onLeftClick}>
        <div>◀️</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>▶️</div>
      </button>
    </PaginationCSS>
  );
};

// Tem que instalar 'npm install --save styled-components@5.3.10'
const PaginationCSS = styled.div`
  background-color: #0e6f;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default Pagination;
