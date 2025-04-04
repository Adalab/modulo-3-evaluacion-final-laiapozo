import CharacterCard from "./CharacterCard";
import "../scss/components/CharactersList.scss";
import PropTypes from "prop-types";

const CharactersList = ({ characters }) => {
  return (
    <section>
      <ul className="charactersGallery">
        {characters.map((character) => {
          return <CharacterCard characters={character} key={character.id} />;
        })}
      </ul>
    </section>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
};

CharactersList.defaultTypes = {
  characters: [],
};

export default CharactersList;
