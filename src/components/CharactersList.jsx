import CharacterCard from "./CharacterCard";

const CharactersList = ({ characters }) => {
  return (
    <section>
      <ul>
        {characters.map((character) => {
          return <CharacterCard characters={character} key={character.id} />;
        })}
      </ul>
    </section>
  );
};

export default CharactersList;
