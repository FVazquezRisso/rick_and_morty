import SearchBar from "./SearchBar";
import styled from "styled-components";
import { colors } from "../CSS/variables";
import { NavLink } from "react-router-dom";

const Navbar = styled.nav`
  display: flex;
  padding: 0.25rem;
  border-bottom: 2px dashed ${colors.tertiary};
  justify-content: space-between;
`;

const NavButtonsContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
`;

const NavButtons = styled(NavLink)`
  margin: 0 3rem;
  padding: 0.4rem 0.75rem;
  background-color: ${colors.tertiary};
  border: 2px solid ${colors.tertiary};
  border-radius: 15px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${colors.tertiary};
    background-color: white;
  }

  &.active {
    color: ${colors.tertiary};
    background-color: white;
  }
`;

export default function Nav({ onSearch }) {
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
      </NavButtonsContainer>
      <SearchBarContainer>
        <SearchBar onSearch={onSearch} />
      </SearchBarContainer>
    </Navbar>
  );
}
