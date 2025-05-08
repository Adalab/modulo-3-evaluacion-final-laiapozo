import "../scss/components/FilterSpecies.scss";
import PropTypes from "prop-types";

const FilterSpecies = ({ handleSpeciesChange, species }) => {
  return (
    <select
      className="speciesFilter"
      name="species"
      id="species"
      value={species}
      onChange={(ev) => handleSpeciesChange(ev.target.value)}
    >
      <option value="">What kind of species is the character?</option>
      <option value="Human">Human</option>
      <option value="Alien">Alien</option>
    </select>
  );
};

FilterSpecies.propTypes = {
  handleSpeciesChange: PropTypes.func.isRequired,
  species: PropTypes.string.isRequired,
};

export default FilterSpecies;
