import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import axios from "axios";
import { Router, Routes, Route, MemoryRouter } from "react-router-dom";
import About from "./components/About";

export default function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    let temp = characters.filter((e) => {
      return e.id !== Number(id);
    });
    setCharacters(temp);
  };

  return (
    <MemoryRouter>
      <div className="App">
        <Nav onSearch={onSearch} />
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}
