const callToApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const parsedCharacters = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          photo: character.image,
          species: character.species,
          origin: character.origin.name,
          status: character.status,
          episodes: character.episode.length,
        };
      });
      return parsedCharacters;
    });
};

export default callToApi;
