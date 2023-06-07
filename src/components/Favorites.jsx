import { connect } from "react-redux";
import Card from "./Card";
import styled from "styled-components";

const FavsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: transparent;
`;

function Favorites({ myFavorites }) {
  return (
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
            origin={card.origin.name}
            image={card.image}
          />
        );
      })}
    </FavsContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
