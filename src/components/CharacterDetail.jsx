import { Link } from "react-router-dom";
import "../scss/components/CharacterDetail.scss";
import PropTypes from "prop-types";

const CharacterDetail = ({ character }) => {
  let status = "";
  if (character.status === "Alive") {
    status = <i className="icon fa-solid fa-face-smile"></i>;
  } else if (character.status === "Dead") {
    status = <i className="icon fa-solid fa-skull-crossbones"></i>;
  } else {
    status = <i className="icon fa-solid fa-question"></i>;
  }

  let species = "";
  if (character.species === "Human") {
    species = <i className="icon fa-solid fa-person"></i>;
  } else if (character.species === "Alien") {
    species = "👽";
  } else {
    species = character.species;
  }

  return (
    <section className="detail">
      <Link to="/">
        <i className="detail__arrow fa-solid fa-arrow-left"></i>
      </Link>
      <article className="detail__card">
        <img
          className="detail__card__img"
          src={character.photo}
          alt={`Image of ${character.photo}`}
        />
        <div className="detail__card__text">
          <h3>{character.name}</h3>
          <p><span className="info">Species: </span>{species}</p>
          <p><span className="info">Origin: </span>{character.origin}</p>
          <p><span className="info">Number of episodes: </span>{character.episodes}</p>
          <p><span className="info">Status: </span>{status}</p>
        </div>
      </article>
    </section>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired,
};

CharacterDetail.defaultTypes = {
  character: {},
};

export default CharacterDetail;
