import { Link } from "react-router-dom";

const CharacterDetail = ({ character }) => {
    return (
        <>
        <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
        <section>
            <div>
                <img src={character.photo} alt={`Image of ${character.photo}`} />
            </div>
            <h4>{character.name}</h4>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin}</p>
            <p>Number of episodes: {character.episodes}</p>
            <p>Status: {character.status}</p>
        </section>
        </>
    );
};

export default CharacterDetail;