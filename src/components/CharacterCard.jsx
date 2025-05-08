import { Link } from "react-router-dom";
import "../scss/components/CharacterCard.scss";
import PropTypes from "prop-types";

const CharacterCard = ({ character }) => {
  let species = "";
  if (character.species === "Human") {
    species = <i className="icon fa-solid fa-person"></i>;
  } else if (character.species === "Alien") {
    species = "👽";
  } else {
    species = character.species;
  }

  return (
    <Link to={`/detail/${character.id}`}>
      <li className="character">
        <img
          className="character__img"
          src={character.photo}
          alt={`Image of ${character.name}`}
        />
        <div className="character__text">
          <h5>{character.name}</h5>
          <p>{species}</p>
        </div>
      </li>
    </Link>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
