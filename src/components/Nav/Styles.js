import styled from "styled-components";
import { colors } from "../../CSS/variables";
import { NavLink } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  padding: 0.25rem;
  justify-content: space-between;
  background-color: rgba(138, 250, 216, 0.3);
  backdrop-filter: blur(5px);
`;

export const NavButtonsContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

export const NavButtons = styled(NavLink)`
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

export const Logout = styled.button`
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
