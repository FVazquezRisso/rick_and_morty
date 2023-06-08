import { AboutContainer, Info } from "./Styles";

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
