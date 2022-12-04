import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navigation";

// Header section
function Header() {
  return (
    <header className="flex-row px-1">
      <div className="logo">
        <h1>
          <Link to="/">Vaishali Patel</Link>
        </h1>
      </div>
      <NavBar></NavBar>
    </header>
  );
}

export default Header;
