import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { colors } from "../CSS/variables";

const DetailContainer = styled.div`
  margin: 5rem auto;
  padding: 3rem;
  width: 70%;
  display: flex;
  background-color: ${colors.secondary};
  justify-content: space-around;
  border: 5px solid #cc9579;
  border-radius: 50px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nombre = styled.h2`
  font-size: 2rem;
`;

const Info = styled.p`
  text-align: left;
`;

const Image = styled.img`
  border-radius: 20px;
  border: 5px solid #cc9579;
`;

export default function Detail() {
  const id = useParams().id;

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
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
