// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import ResultDetail from "./components/ResultDetail";
import SearchSwitch from "./components/SearchSwitch";
import "./components/SearchSwitch.css";
import "./styles/AppStyles.css";
import "./styles/SearchDiv.css";
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
    <div className="app-container">
      <h1 style={{ marginBottom: "94px" }}>Búsqueda en GitHub</h1>
      {selectedResult ? (
        <ResultDetail
          result={selectedResult}
          onBack={handleBack}
          onlyUsers={isSerchingUsers}
        />
      ) : (
        <>
          <div className="search-container">
            <SearchBar onSearch={handleSearch} onlyUsers={isSerchingUsers} />
            <ResultList
              results={results}
              onResultClick={handleResultClick}
              onlyUsers={isSerchingUsers}
            />
          </div>

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
