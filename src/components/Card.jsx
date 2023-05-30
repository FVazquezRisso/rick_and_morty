import styled from "styled-components";
import { colors } from "../CSS/variables";

const CloseButton = styled.button`
  position: absolute;
  margin: 0.5rem;
  right: 0;
  background-color: ${colors.tertiary};
  border: 2px solid ${colors.tertiary};
  border-radius: 0.25rem;
  color: white;

  &:hover {
    color: ${colors.tertiary};
    background-color: white;
    cursor: pointer;
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  margin: 1rem;
  background-color: ${colors.secondary};
  border: 0.25rem solid ${colors.secondary};
  border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem;

  &:hover {
    transform: scale(1.01, 1.01);
    transition-property: transform, box-shadow;
    transition-timing-function: ease-in-out;
    transition-duration: 0.15s;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.075);
  }
`;

const CardInfo = styled.p`
  margin: 1rem;
  text-align: left;
  color: white;
`;

const Nombre = styled.p`
  position: absolute;
  padding: 10px;
  top: 52%;
  transform: translate(0, -50%);
  background-color: ${colors.tertiary};
  color: white;
  font-weight: bold;
  text-align: center;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
`;

const Propiedad = styled.b`
  color: white;
`;

export default function Card(props) {
  return (
    <CardContainer>
      <CloseButton onClick={() => props.onClose(props.id)}>X</CloseButton>
      <img src={props.image} alt={`Imagen de ${props.name}`} />
      <Nombre>{props.name}</Nombre>
      <CardInfo>
        <Propiedad>Estado:</Propiedad> {props.status}
      </CardInfo>
      <CardInfo>
        <Propiedad>Especie:</Propiedad> {props.species}
      </CardInfo>
      <CardInfo>
        <Propiedad>Género:</Propiedad> {props.gender}
      </CardInfo>
      <CardInfo>
        <Propiedad>Origen:</Propiedad> {props.origin}
      </CardInfo>
    </CardContainer>
  );
}
