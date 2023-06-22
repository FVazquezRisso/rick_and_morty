import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import {
  CloseButton,
  CardContainer,
  CardInfo,
  Nombre,
  Propiedad,
  Image,
  FavButton,
} from "./Styles";

export default function Card(props) {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const location = useLocation().pathname;

  return (
    <CardContainer>
      {location !== "/favorites" && (
        <CloseButton onClick={() => props.onClose(props.id)}>X</CloseButton>
      )}
      {isFav ? (
        <FavButton onClick={handleFavorite}>❤️</FavButton>
      ) : (
        <FavButton onClick={handleFavorite}>🤍</FavButton>
      )}
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
