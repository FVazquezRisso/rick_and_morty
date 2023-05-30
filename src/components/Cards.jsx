import Card from "./Card";
import styled from "styled-components";
import { colors } from "../CSS/variables";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${colors.primary};
`;

export default function Cards({ characters, onClose }) {
  return (
    <CardsContainer>
      {characters.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            status={card.status}
            species={card.species}
            gender={card.gender}
            origin={card.origin.name}
            image={card.image}
            onClose={onClose}
          />
        );
      })}
    </CardsContainer>
  );
}
