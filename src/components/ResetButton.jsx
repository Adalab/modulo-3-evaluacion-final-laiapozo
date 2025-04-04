import "../scss/components/ResetButton.scss";
import PropTypes from "prop-types";

const ResetButton = ({ handleResetButton }) => {
  return (
    <button className="btn" onClick={handleResetButton}>
      Reset
    </button>
  );
};

ResetButton.propTypes = {
  handleResetButton: PropTypes.func.isRequired,
};

export default ResetButton;
