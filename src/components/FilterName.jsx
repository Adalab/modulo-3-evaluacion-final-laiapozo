const FilterName = ({ handleNameChange, name }) => {
  return (
    <>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        value={name}
        placeholder="Search..."
        onChange={(ev) => {
          handleNameChange(ev.target.value);
        }}
      />
    </>
  );
};

export default FilterName;
