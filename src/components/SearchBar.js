// src/components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch, onlyUsers }) => {
  const [searchvalue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchvalue === "") return;
    fetch(
      `http://localhost:3000/api/github/${
        onlyUsers ? "users?name=" : "repos?name="
      }${searchvalue}`
    )
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
        value={searchvalue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Buscar en GitHub"
      />
      <button type="submit">Buscar</button>
      {/* <button onClick={() => handleSwitchMode("repositories")}>Buscar Repositorios</button>
<button onClick={() => handleSwitchMode("users")}>Buscar Usuarios</button> */}
    </form>
  );
};
export default SearchBar;

// `https://api.github.com/search/${
//         onlyUsers ? "users" : "repositories"
//       }?q=${searchvalue}`
