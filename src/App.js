// src/App.js
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import ResultDetail from "./components/ResultDetail";
import SearchSwitch from "./components/SearchSwitch";
import "./components/SearchSwitch.css";
import "./styles/AppStyles.css";
import "./styles/SearchDiv.css";
import QueriesList from "./components/QueriesList";

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isSerchingUsers, setisSerchingUsers] = useState(false);
  const switchType = (newState) => setisSerchingUsers(newState);
  const [queries, setQueries] = useState([]);
  const handleSearch = (datos) => {
    setResults(datos);
  };
  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  const handleBack = () => {
    setSelectedResult(null);
  };
  const fetchQueries = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/queries");
      if (!response.ok) {
        throw new Error("no se pudo cargar");
      }
      const result = await response.json();
      setQueries(result);
    } catch (error) {
      console.log("ERROR", error.message);
    }
  };
  useEffect(() => {
    fetchQueries();
  }, []);
  return (
    <div className="app-container">
      <div style={{ display: "flex", flexDirection: "column" }}>
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

            <div>
              <SearchSwitch
                isSearchingUsers={isSerchingUsers}
                onSwitch={switchType}
              />
            </div>
          </>
        )}
      </div>
      <div>
        <h1>Busqueda Queries</h1>
        <div className="search-container">
          <QueriesList queries={queries} />
        </div>
      </div>
    </div>
  );
};

export default App;
