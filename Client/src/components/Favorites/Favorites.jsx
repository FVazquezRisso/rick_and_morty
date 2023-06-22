import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FavsContainer, SelectContainer, Select } from "./Styles";

export default function Favorites() {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <SelectContainer>
        <Select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </Select>

        <Select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </SelectContainer>
      <FavsContainer>
        {myFavorites.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              status={card.status}
              species={card.species}
              gender={card.gender}
              origin={card.origin?.name}
              image={card.image}
            />
          );
        })}
      </FavsContainer>
    </>
  );
}
