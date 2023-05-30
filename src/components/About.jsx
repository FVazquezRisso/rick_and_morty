import styled from "styled-components";
import { colors } from "../CSS/variables";

const AboutContainer = styled.div`
  margin: 2rem auto;
  padding: 3rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.tertiary};
  border-radius: 50px;
`;

const Info = styled.p`
  color: white;
  text-align: left;
  font-size: 18px;
`;

export default function About() {
  return (
    <AboutContainer>
      <Info>
        <b>Nombre: </b>Facundo
      </Info>
      <Info>
        <b>Apellido: </b>Vázquez
      </Info>
      <Info>
        <b>Edad: </b>20
      </Info>
      <Info>
        <b>Cohorte: </b>FT-39a
      </Info>
      <Info>
        <b>País: </b>Uruguay
      </Info>
      <Info>
        <b>Idiomas:</b> Español
      </Info>
      <Info>
        <b>Objetivo:</b> Ser un alumno graduado de Henry y conseguir trabajo
        como desarrollador web.
      </Info>
    </AboutContainer>
  );
}
