import "../scss/components/FilterStatus.scss";
import PropTypes from "prop-types";

const FilterStatus = ({ handleStatusChange, status }) => {
  return (
    <select
      className="statusFilter"
      value={status}
      name="status"
      id="status"
      onChange={(ev) => {
        handleStatusChange(ev.target.value);
      }}
    >
      <option value="">Is the character alive?</option>
      <option value="Alive">Yes</option>
      <option value="Dead">No</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};

FilterStatus.propTypes = {
  handleStatusChange: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default FilterStatus;
