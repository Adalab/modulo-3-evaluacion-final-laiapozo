import rick from "../images/rick.png";
import "../scss/components/CharacterNotFound.scss";

const CharacterNotFound = ({ nameInput }) => {
  return (
    <section className="characterNotFound">
      <p className="characterNotFound__text">
        We can't find <span className="characterNotFound__text__name">{nameInput}</span> in
        The Multiverse...
      </p>
      <img className="characterNotFound__img" src={rick} alt="Rick Sánchez" />
    </section>
  );
};

export default CharacterNotFound;
