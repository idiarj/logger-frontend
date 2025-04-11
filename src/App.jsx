import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import "./App.css";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <button className="log-button">log 1</button>
            <button className="log-button">log 2</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
