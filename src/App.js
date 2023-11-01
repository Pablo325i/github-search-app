// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import ResultDetail from "./components/ResultDetail";
import SearchSwitch from "./components/SearchSwitch";

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isSerchingUsers, setisSerchingUsers] = useState(false);
  const switchType = (newState) => setisSerchingUsers(newState);

  const handleSearch = (datos) => {
    setResults(datos);
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
        <ResultDetail
          result={selectedResult}
          onBack={handleBack}
          onlyUsers={isSerchingUsers}
        />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} onlyUsers={isSerchingUsers} />
          <ResultList
            results={results}
            onResultClick={handleResultClick}
            onlyUsers={isSerchingUsers}
          />
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
