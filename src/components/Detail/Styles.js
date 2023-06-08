import styled from "styled-components";
import { colors } from "../../CSS/variables";

export const DetailContainer = styled.div`
  margin: 5rem auto;
  padding: 3rem;
  width: 70%;
  display: flex;
  background-color: ${colors.secondary};
  justify-content: space-around;
  border: 5px solid #cc9579;
  border-radius: 50px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nombre = styled.h2`
  font-size: 2rem;
`;

export const Info = styled.p`
  text-align: left;
`;

export const Image = styled.img`
  border-radius: 20px;
  border: 5px solid #cc9579;
`;
