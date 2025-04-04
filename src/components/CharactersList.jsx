import CharacterCard from "./CharacterCard";

const CharactersList = ({ characters }) => {
  return (
    <section>
      <CharacterCard characters={characters} />
    </section>
  );
};

export default CharactersList;
