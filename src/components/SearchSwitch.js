const SearchSwitch = ({ isSearchingUsers, onSwitch }) => {
  return (
    <div className="usersearch">
      <h5 style={{ marginRight: "10px" }}>Búscar por Usuarios</h5>
      <label className="switch">
        <input
          type="checkbox"
          checked={isSearchingUsers}
          onChange={() => onSwitch(!isSearchingUsers)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default SearchSwitch;
