import FilterName from "./FilterName";

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

export default Filters;
