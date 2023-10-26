// src/components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.github.com/search/repositories?q=${term}`)
      .then((response) => response.json())
      .then((data) => {
        onSearch(data.items); // Envía los resultados al componente padre
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Buscar en GitHub"
      />
      <button type="submit">Buscar</button>
      {/* <button onClick={() => handleSwitchMode("repositories")}>Buscar Repositorios</button>
<button onClick={() => handleSwitchMode("users")}>Buscar Usuarios</button> */}
    </form>
  );
};
export default SearchBar;
