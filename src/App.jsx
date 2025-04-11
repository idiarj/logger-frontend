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
      {/* Título principal */}
      <h1 className="app-title">logger by idiar y vic</h1>

      {/* Contenedor turquesa principal */}
      <div className="teal-container">
        <div className="search-wrapper">
          {/* Barra de búsqueda blanca */}
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Buscar logs..."
            />
            {/* Icono de lupa a la derecha dentro de la barra */}
            <FaSearch className="search-icon" />
          </div>

          {/* Botón circular blanco con flecha */}
          <button className="dropdown-button" onClick={handleToggleDropdown}>
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {/* Logs que se despliegan */}
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
