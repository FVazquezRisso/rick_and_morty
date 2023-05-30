import styled from "styled-components";
import { colors } from "../CSS/variables";
import { Link } from "react-router-dom";

const CloseButton = styled.button`
  position: absolute;
  margin: 1.2rem;
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
  margin: 1rem;
  padding-bottom: 1rem;
  width: 300px;
  position: relative;
  background-color: ${colors.secondary};
  border: 0.25rem solid ${colors.secondary};
  border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;

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

const Nombre = styled(Link)`
  position: absolute;
  padding: 10px;
  top: 52%;
  left: 0;
  background-color: ${colors.tertiary};
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
`;

const Propiedad = styled.b`
  color: white;
`;

const Image = styled.img`
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;
`;

export default function Card(props) {
  return (
    <CardContainer>
      <CloseButton onClick={() => props.onClose(props.id)}>X</CloseButton>
      <Image src={props.image} alt={`Imagen de ${props.name}`} />
      <Nombre to={`/detail/${props.id}`}>{props.name}</Nombre>
      <CardInfo>
        <Propiedad>Especie:</Propiedad> {props.species}
      </CardInfo>
      <CardInfo>
        <Propiedad>Género:</Propiedad> {props.gender}
      </CardInfo>
    </CardContainer>
  );
}
