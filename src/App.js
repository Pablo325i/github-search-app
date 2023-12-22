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
  const deleteQuery = (query) => {
    const filteredQueris = queries.filter((e) => e._id !== query._id);
    setQueries(filteredQueris);
    console.log("filtered", filteredQueris);
    console.log("queries", queries);
  };
  const handleBack = () => {
    setSelectedResult(null);
  };
  const deleteSelectedQuery = async (query) => {
    console.log("SelectedQuery");
    try {
      const URL = `http://localhost:3000/api/github/queries/${query._id}`;
      const response = await fetch(URL, { method: "delete" });
      if (!response.ok) {
        throw new Error("no se pudo eliminar");
      }
    } catch (error) {
      console.log("ERROR", error.message);
    }
    deleteQuery(query);
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
  }, [results]);
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
        <h1>Historial de Queries</h1>
        <div style={{ marginTop: "93px" }} className="search-container">
          <QueriesList
            queries={queries}
            deleteSelectedQuery={deleteSelectedQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
