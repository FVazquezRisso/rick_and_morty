import styled from "styled-components";
import { colors } from "../CSS/variables";
import { useState } from "react";

const Buscador = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  outline: none;
  color: ${colors.tertiary};
  border-radius: 15px;
  border: 2px solid transparent;
  border-bottom-color: ${colors.tertiary};

  &:focus {
    border: 2px solid ${colors.tertiary};
    border-radius: 15px;
  }
`;

const SearchButton = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: ${colors.tertiary};
  border: 2px solid ${colors.tertiary};
  border-radius: 15px;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${colors.tertiary};
    background-color: white;
  }
`;

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (input) => {
    setId(input.target.value);
  };

  return (
    <div>
      <Buscador
        onChange={handleChange}
        type="search"
        placeholder="Buscar..."
        value={id}
      />
      <SearchButton onClick={() => onSearch(id)}>Agregar</SearchButton>
    </div>
  );
}
