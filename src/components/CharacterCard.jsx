import { Link } from "react-router-dom";
import "../scss/components/CharacterCard.scss";
import PropTypes from "prop-types";

const CharacterCard = ({ characters }) => {
  let species = "";
  if (characters.species === "Human") {
    species = <i className="icon fa-solid fa-person"></i>;
  } else if (characters.species === "Alien") {
    species = "👽";
  } else {
    species = characters.species;
  }

  return (
    <Link to={`/detail/${characters.id}`}>
      <li className="character">
        <img
          className="character__img"
          src={characters.photo}
          alt={`Image of ${characters.name}`}
        />
        <div className="character__text">
          <h5>{characters.name}</h5>
          <p>{species}</p>
        </div>
      </li>
    </Link>
  );
};

CharacterCard.propTypes = {
  characters: PropTypes.object.isRequired,
};

CharacterCard.defaultTypes = {
  characters: {},
};

export default CharacterCard;
