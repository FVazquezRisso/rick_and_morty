import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DetailContainer, InfoContainer, Nombre, Info, Image } from "./Styles";

export default function Detail() {
  const id = useParams().id;

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <DetailContainer>
      <InfoContainer>
        <Nombre>{character.name && character.name}</Nombre>
        <Info>
          <b>Estado: </b>
          {character.status && character.status}
        </Info>
        <Info>
          <b>Género: </b>
          {character.gender && character.gender}
        </Info>
        <Info>
          <b>Especie: </b>
          {character.species && character.species}
        </Info>
        <Info>
          <b>Origen: </b>
          {character.origin && character.origin.name}
        </Info>
      </InfoContainer>
      <Image src={character.image} alt={`Imagen de ${character.name}`} />
    </DetailContainer>
  );
}
