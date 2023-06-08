import styled from "styled-components";
import { colors } from "../../CSS/variables";

export const AboutContainer = styled.div`
  margin: 2rem auto;
  padding: 3rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.tertiary};
  border-radius: 50px;
`;

export const Info = styled.p`
  color: white;
  text-align: left;
  font-size: 18px;
`;
