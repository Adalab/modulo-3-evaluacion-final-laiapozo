const FilterName = ({ handleNameChange }) => {
  return (
    <>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        placeholder="Search..."
        onChange={(ev) => {
          handleNameChange(ev.target.value);
        }}
      />
    </>
  );
};

export default FilterName;
