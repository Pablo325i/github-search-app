// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import ResultDetail from "./components/ResultDetail";
import SearchSwitch from "./components/SearchSwitch";

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isSerchingUsers, setisSerchingUsers] = useState(false);
  const switchType = (newState) => setisSerchingUsers(newState);
  const handleSearch = (term) => {
    fetch(
      `https://api.github.com/search/${
        isSerchingUsers ? "users" : "repositories"
      }?q=${term}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.items); // Actualiza el estado con los resultados
      })
      .catch((error) => console.error("Error:", error));
  };
  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  const handleBack = () => {
    setSelectedResult(null);
  };

  return (
    <div>
      <h1>Búsqueda en GitHub</h1>
      {selectedResult ? (
        <ResultDetail result={selectedResult} onBack={handleBack} />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <SearchResults results={results} onResultClick={handleResultClick} />
          <SearchSwitch
            isSearchingUsers={isSerchingUsers}
            onSwitch={switchType}
          />
        </>
      )}
    </div>
  );
};

export default App;
