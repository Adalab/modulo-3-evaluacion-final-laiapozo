import "../scss/components/FilterName.scss";
import PropTypes from "prop-types";

const FilterName = ({ handleNameChange, name }) => {
  return (
    <input
      className="nameFilter"
      type="text"
      id="name"
      value={name}
      placeholder="Search..."
      onChange={(ev) => {
        handleNameChange(ev.target.value);
      }}
    />
  );
};

FilterName.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilterName;
