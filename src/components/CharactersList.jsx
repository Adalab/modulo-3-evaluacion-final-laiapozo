import CharacterCard from "./CharacterCard";
import "../scss/components/CharactersList.scss";

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

export default CharactersList;
