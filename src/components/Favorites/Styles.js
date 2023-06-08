import styled from "styled-components";
import { colors } from "../../CSS/variables";

export const FavsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: transparent;
`;

export const SelectContainer = styled.div`
  width: 100%;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  margin: 0 1rem;
  padding: 0.5rem;
  border-radius: 15px;
  border: 3px solid transparent;
  background-color: ${colors.tertiary};
  color: white;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;
