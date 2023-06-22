import { useState } from "react";
import { Buscador, SearchButton } from "./Styles";

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
