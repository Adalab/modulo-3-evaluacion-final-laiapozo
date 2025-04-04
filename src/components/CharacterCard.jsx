import { Link } from "react-router-dom";

const CharacterCard = ({ characters }) => {
  return (
    <Link to={`/detail/${characters.id}`}>
      <li>
        <img src={characters.photo} alt={`Image of ${characters.name}`} />
        <h5>{characters.name}</h5>
        <p>{characters.species}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;
