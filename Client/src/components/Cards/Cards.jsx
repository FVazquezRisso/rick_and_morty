import Card from "../Card/Card";
import { CardsContainer } from "./Styles";

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
