import "../scss/components/FilterName.scss";

const FilterName = ({ handleNameChange, name }) => {
  return (
    <>
      <input
        className="nameFilter"
        type="text"
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
