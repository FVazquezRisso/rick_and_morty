import styled from "styled-components";
import { colors } from "../../CSS/variables";

export const Label = styled.label`
  margin: 0.5rem;
  color: white;
  font-weight: bold;
  text-align: left;
`;

export const Warning = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: red;
`;

export const FormContainer = styled.form`
  width: 30%;
  height: 40vh;
  padding: 2rem 3rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.tertiary};
  border-radius: 50px;
  border: 5px solid #7fac40;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("https://www.lavanguardia.com/peliculas-series/images/serie/backdrop/2013/12/w1280/uGy4DCmM33I7l86W7iCskNkvmLD.jpg");
  background-size: cover;
`;

export const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  outline: none;
  color: ${colors.tertiary};
  border-radius: 15px;
  border: 2px solid transparent;
`;

export const Submit = styled.button`
  margin: 0.5rem;
  padding: 0.75rem;
  background-color: ${colors.tertiary};
  border: 2px solid ${colors.tertiary};
  border-radius: 15px;
  border-color: white;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${colors.tertiary};
    background-color: white;
  }
`;
