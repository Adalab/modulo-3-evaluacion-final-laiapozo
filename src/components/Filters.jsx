import FilterName from "./FilterName";
import PropTypes from "prop-types";

const Filters = ({ handleNameChange, name }) => {
  const handleEnter = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  };

  return (
    <form onKeyDown={handleEnter}>
      <FilterName handleNameChange={handleNameChange} name={name} />
    </form>
  );
};

Filters.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Filters.defaultTypes = {
  name: "",
};

export default Filters;
