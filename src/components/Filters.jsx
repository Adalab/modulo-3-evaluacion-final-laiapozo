import FilterName from "./FilterName";

const Filters = ({ handleNameChange }) => {
  return (
    <form>
      <FilterName handleNameChange={handleNameChange} />
    </form>
  );
};

export default Filters;
