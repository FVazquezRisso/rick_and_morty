import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const EMAIL = "email01@ejemplo.com";
  const PASSWORD = "password01";

  const location = useLocation().pathname;

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    let temp = characters.filter((e) => {
      return e.id !== Number(id);
    });
    setCharacters(temp);
  };

  return (
    <div className="App">
      {location !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
