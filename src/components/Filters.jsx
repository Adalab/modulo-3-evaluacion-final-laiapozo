import FilterName from "./FilterName";
import FilterStatus from "./FilterStatus";
import FilterSpecies from "./FilterSpecies";
import PropTypes from "prop-types";
import ResetButton from "./ResetButton";
import "../scss/components/Filters.scss";

const Filters = ({
  handleNameChange,
  name,
  handleStatusChange,
  status,
  handleSpeciesChange,
  species,
  handleResetButton,
}) => {
  const handleEnter = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  };

  return (
    <form className="form" onKeyDown={handleEnter}>
      <FilterName handleNameChange={handleNameChange} name={name} />
      <FilterStatus handleStatusChange={handleStatusChange} status={status} />
      <FilterSpecies
        handleSpeciesChange={handleSpeciesChange}
        species={species}
      />
      <ResetButton handleResetButton={handleResetButton} />
    </form>
  );
};

Filters.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleSpeciesChange: PropTypes.func.isRequired,
  species: PropTypes.string.isRequired,
  handleStatusChange: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default Filters;
