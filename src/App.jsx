import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import "./App.css";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logs, setLogs] = useState([]);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchLogs = async () => {
      const response = await import("./data/logs.json");
      setLogs(response.default);
    };
    fetchLogs();
  }, []);

  const typeColors = {
    error: "red",
    warning: "orange",
    info: "green",
    debug: "gray",
    post: "#4CAF50",
    put: "#2196F3",
    delete: "#f44336",
    get: "#009688",
    patch: "#9C27B0"
  };

  return (
    <div className="app-container">
      <h1 className="app-title">logger by idiar y victoria</h1>

      <div className="teal-container">
        <div className="search-wrapper">
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Buscar logs..."
            />
            <FaSearch className="search-icon" />
          </div>
          <button className="dropdown-button" onClick={handleToggleDropdown}>
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {isDropdownOpen && (
          <div className="logs-container">
            {logs.map((log) => {
              const color = typeColors[log.type] || "#0097b2";
              return (
                <div className="log-item" key={log.id}>
                  <span className="log-message" style={{ color }}>
                    [{new Date(log.timestamp).toLocaleString()}] {log.message} 
                    - CPU: {log.cpu}% - Mem: {log.memory}MB
                  </span>
                  <span className="log-type" style={{ color }}>
                    {log.type.toUpperCase()}
                    <span
                      className="type-circle"
                      style={{ backgroundColor: color }}
                    />
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
