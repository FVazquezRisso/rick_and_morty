import SearchBar from "../SearchBar/SearchBar";
import {
  Navbar,
  NavButtonsContainer,
  SearchBarContainer,
  NavButtons,
  Logout,
} from "./Styles";

export default function Nav({ onSearch, setAccess }) {
  const handleLogout = () => {
    setAccess(false);
  };

  return (
    <Navbar>
      <NavButtonsContainer>
        <NavButtons
          to="/home"
          className={(isActive) => (isActive ? "active" : "")}
        >
          Home
        </NavButtons>
        <NavButtons to="/about">About</NavButtons>
        <NavButtons to="/favorites">Favorites</NavButtons>
      </NavButtonsContainer>
      <SearchBarContainer>
        <SearchBar onSearch={onSearch} />
        <Logout onClick={handleLogout}>Logout</Logout>
      </SearchBarContainer>
    </Navbar>
  );
}
