import { Link } from "react-router-dom";
import "../scss/components/CharacterDetail.scss";
import PropTypes from "prop-types";

const CharacterDetail = ({ character }) => {
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
          <h4>{character.name}</h4>
          <p>Species: {character.species}</p>
          <p>Origin: {character.origin}</p>
          <p>Number of episodes: {character.episodes}</p>
          <p>Status: {character.status}</p>
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
