import { Link } from "react-router-dom";
import "../scss/components/CharacterCard.scss";

const CharacterCard = ({ characters }) => {
  return (
    <Link to={`/detail/${characters.id}`}>
      <li className="character">
        <img className="character__img" src={characters.photo} alt={`Image of ${characters.name}`} />
        <div className="character__text">
          <h5>{characters.name}</h5>
          <p>{characters.species}</p>
        </div>
      </li>
    </Link>
  );
};

export default CharacterCard;
