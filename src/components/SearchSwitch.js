const SearchSwitch = ({ isSearchingUsers, onSwitch }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isSearchingUsers}
          onChange={() => onSwitch(!isSearchingUsers)}
        />
        Buscar Usuarios
      </label>
    </div>
  );
};

export default SearchSwitch;
