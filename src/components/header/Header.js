import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="user-info">Welcome, John Doe</div>
      <div className="search-bar">
        <input type="text" placeholder="Search surveys..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
