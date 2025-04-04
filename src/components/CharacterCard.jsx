const CharacterCard = ({ characters }) => {
  return (
    <>
      {characters.map((character) => {
        return (
          <li key={character.id}>
            <img src={character.photo} alt={`Imagen de ${character.name}`} />
            <h5>{character.name}</h5>
            <p>{character.species}</p>
          </li>
        );
      })}
    </>
  );
};

export default CharacterCard;
